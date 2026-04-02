---
layout: page
title: Home
page_class: home-page
---

<!-- Weekly update note: add a new markdown post in `_posts` and the article feed,
count, and latest-articles section update automatically. -->

<section class="hero-grid reveal">
  <div class="hero-card hero-intro">
    <div class="hero-copy">
      <p class="eyebrow">Computer Engineering Portfolio</p>
      <h1>Designing my future through engineering, code, and weekly reflection.</h1>
      <p class="lead">I am Muhammad Umair, a Computer Engineering student at UET Faisalabad. This portfolio shares my journey, my growth, and a dynamic stream of articles that I can keep updating week after week.</p>
      <div class="button-row">
        <a class="button-link primary" href="{{ "/blog/" | relative_url }}">Explore Articles</a>
        <a class="button-link secondary" href="{{ "/about/" | relative_url }}">About Me</a>
      </div>
    </div>

    <div class="fact-grid">
      <article class="stat-card">
        <span class="fact-number" data-article-count>{{ site.posts | size }}</span>
        <span class="fact-label">Published articles generated from my portfolio feed</span>
      </article>
      <article class="stat-card">
        <span class="fact-number">2.94</span>
        <span class="fact-label">First-semester GPA and a clear drive to improve</span>
      </article>
      <article class="stat-card">
        <span class="fact-number">UET</span>
        <span class="fact-label">Computer Engineering student at Faisalabad campus</span>
      </article>
      <article class="stat-card">
        <span class="fact-number">Weekly</span>
        <span class="fact-label">Ready for regular article updates without editing HTML</span>
      </article>
    </div>
  </div>

  <div class="hero-side">
    <article class="spotlight-card">
      <p class="eyebrow">Current Focus</p>
      <h2>Learning deeply, writing regularly, improving consistently</h2>
      <div class="mini-list">
        <div><strong>Current Study:</strong> Second semester of Computer Engineering</div>
        <div><strong>Interests:</strong> Programming, databases, machine learning, and practical problem solving</div>
        <div><strong>Goal:</strong> Build a strong technical foundation while documenting each milestone</div>
      </div>
    </article>

    <article class="spotlight-card">
      <p class="eyebrow">Portfolio System</p>
      <h2>Now built for dynamic article growth</h2>
      <p>This updated homepage reads article data automatically, so new posts can appear in the article count and latest section without rewriting the HTML layout every week.</p>
    </article>
  </div>
</section>

<section class="section-panel article-showcase reveal" data-articles-module>
  <div class="section-bar">
    <div>
      <p class="eyebrow">Latest Articles</p>
      <h2>Newest updates from my engineering journey</h2>
      <p class="section-copy">These cards are powered by a structured article feed. Add a new post, and the latest section updates automatically.</p>
    </div>
    <a class="button-link secondary" href="{{ "/blog/" | relative_url }}">Browse All Articles</a>
  </div>

  <div class="articles-grid" data-articles-list data-limit="3" data-empty-message="New articles will appear here soon.">
    {% for post in site.posts limit: 3 %}
    <article class="article-card fallback-card" style="--card-index:{{ forloop.index0 }}">
      <p class="article-card__meta">{{ post.date | date: site.date_format }}</p>
      <h3 class="article-card__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="article-card__description">{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
      <a class="article-card__link" href="{{ post.url | relative_url }}">Read article</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section-panel reveal">
  <p class="eyebrow">Journey Highlights</p>
  <h2>From uncertainty to a more focused technical path</h2>
  <div class="timeline-strip">
    <article class="timeline-card">
      <span>Early Direction</span>
      <h3>Biology to Computer Science</h3>
      <p>My path changed after matriculation, when I discovered a stronger interest in technology and decided to move toward ICS.</p>
    </article>
    <article class="timeline-card">
      <span>Major Turning Point</span>
      <h3>Admission to UET Faisalabad</h3>
      <p>Through entry tests, uncertainty, and difficult choices, I reached the university that opened this new chapter in my life.</p>
    </article>
    <article class="timeline-card">
      <span>Current Focus</span>
      <h3>Building technical confidence</h3>
      <p>Programming, databases, and hands-on learning are helping me shape a stronger future in Computer Engineering.</p>
    </article>
  </div>
</section>
