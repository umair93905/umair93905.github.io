/*
 * Dynamic article renderer for GitHub Pages.
 * Add a new markdown post in `_posts` and this script will automatically:
 * - refresh article counts
 * - rebuild the latest-articles section
 * - rebuild the Journey page with load-more support
 */

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");

  const articlesUrl = document.body.dataset.articlesUrl;
  if (!articlesUrl) {
    return;
  }

  initialiseDynamicArticles(articlesUrl);
});

async function initialiseDynamicArticles(articlesUrl) {
  try {
    const response = await fetch(articlesUrl, {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const articles = await response.json();
    const sortedArticles = [...articles].sort((left, right) => {
      return new Date(right.isoDate) - new Date(left.isoDate);
    });

    updateArticleCounts(sortedArticles.length);
    renderArticleModules(sortedArticles);
  } catch (error) {
    console.warn("Dynamic article feed could not be loaded.", error);
  }
}

function updateArticleCounts(total) {
  document.querySelectorAll("[data-article-count]").forEach((node) => {
    node.textContent = total;
  });
}

function renderArticleModules(articles) {
  document.querySelectorAll("[data-articles-module]").forEach((module) => {
    const list = module.querySelector("[data-articles-list]");
    if (!list) {
      return;
    }

    const pageSize = Number.parseInt(list.dataset.limit || "6", 10);
    const loadMoreButton = module.querySelector("[data-load-more]");
    const emptyMessage = list.dataset.emptyMessage || "No articles published yet.";
    let visibleCount = pageSize;

    const render = () => {
      const visibleArticles = articles.slice(0, visibleCount);

      if (!visibleArticles.length) {
        list.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
      } else {
        list.innerHTML = visibleArticles
          .map((article, index) => createArticleCard(article, index))
          .join("");
      }

      if (loadMoreButton) {
        const hasMore = visibleCount < articles.length;
        loadMoreButton.hidden = !hasMore;

        if (hasMore) {
          const remaining = articles.length - visibleCount;
          const nextBatch = Math.min(pageSize, remaining);
          loadMoreButton.textContent = `Load More (${nextBatch})`;
        }
      }
    };

    render();

    if (loadMoreButton) {
      loadMoreButton.addEventListener("click", () => {
        visibleCount += pageSize;
        render();
      });
    }
  });
}

function createArticleCard(article, index) {
  return `
    <article class="article-card" style="--card-index:${index}">
      <p class="article-card__meta">${escapeHtml(article.date)}</p>
      <h3 class="article-card__title">
        <a href="${escapeHtml(article.link)}">${escapeHtml(article.title)}</a>
      </h3>
      <p class="article-card__description">${escapeHtml(article.description)}</p>
      <a class="article-card__link" href="${escapeHtml(article.link)}">Read article</a>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
