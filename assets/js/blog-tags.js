document.addEventListener("DOMContentLoaded", function () {
  var categoryCards = Array.prototype.slice.call(document.querySelectorAll("[data-category-filter]"));
  var postCards = Array.prototype.slice.call(document.querySelectorAll("[data-post-tags]"));
  var categoryTitle = document.querySelector("[data-category-title]");
  var emptyState = document.querySelector(".tag-filter-empty");

  if (!categoryCards.length || !postCards.length) {
    return;
  }

  function setActiveCategory(activeTag) {
    categoryCards.forEach(function (card) {
      var isActive = card.getAttribute("data-category-filter") === activeTag;
      card.classList.toggle("is-active", isActive);
      if (isActive) {
        card.setAttribute("aria-current", "true");
      } else {
        card.removeAttribute("aria-current");
      }
    });
  }

  function filterPosts(tag) {
    var visibleCount = 0;

    postCards.forEach(function (card) {
      var tagList = (card.getAttribute("data-post-tags") || "").split("|").filter(Boolean);
      var isVisible = tag === "all" || tagList.indexOf(tag) !== -1;
      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

    if (categoryTitle) {
      categoryTitle.textContent = tag;
    }

    setActiveCategory(tag);

    var activeCard = categoryCards.find(function (card) {
      return card.getAttribute("data-category-filter") === tag;
    });
    var activeHash = activeCard ? activeCard.getAttribute("href") : "";

    if (activeHash && window.location.hash !== activeHash) {
      history.replaceState(null, "", activeHash);
    }
  }

  categoryCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      filterPosts(card.getAttribute("data-category-filter"));
    });
  });

  var initialCard = categoryCards.find(function (card) {
    return card.getAttribute("href") === window.location.hash;
  });
  var firstCategory = categoryCards[0].getAttribute("data-category-filter");
  var initialTag = initialCard ? initialCard.getAttribute("data-category-filter") : firstCategory;

  filterPosts(initialTag);
});
