---
layout: page
title: Home
page_class: home-page
---

<section class="hero-grid">
  <div class="hero-card hero-intro">
    <div>
      <p class="eyebrow">Personal Portfolio</p>
      <h1>Muhammad<br>Umair</h1>
      <p class="lead">Welcome to my personal portfolio. This space reflects who I am, what I am learning, and the progress I am making as a Computer Engineering student through my studies, writing, and continuous growth.</p>
      <div class="button-row">
        <a class="button-link primary" href="{{ "/blog/" | relative_url }}">Read Articles</a>
        <a class="button-link secondary" href="{{ "/about/" | relative_url }}">About Me</a>
      </div>
    </div>

    <div class="fact-grid">
      <div class="detail-card">
        <span class="fact-number">{{ site.posts | size }}</span>
        <span class="fact-label">Published articles currently available on this portfolio</span>
      </div>
      <div class="detail-card">
        <span class="fact-number">2.94</span>
        <span class="fact-label">First semester GPA and a strong motivation to improve</span>
      </div>
      <div class="detail-card">
        <span class="fact-number">UET</span>
        <span class="fact-label">Currently studying Computer Engineering at UET Faisalabad</span>
      </div>
      <div class="detail-card">
        <span class="fact-number">Growth</span>
        <span class="fact-label">Focused on learning, consistency, and documenting progress</span>
      </div>
    </div>
  </div>

  <div class="hero-side">
    <div class="spotlight-card">
      <p class="eyebrow">Profile</p>
      <h2>A portfolio built for continuous updates</h2>
      <div class="mini-list">
        <div><strong>Name:</strong> Muhammad Umair</div>
        <div><strong>Current Focus:</strong> Learning, writing, and improving technical skills</div>
        <div><strong>Use of This Site:</strong> Personal introduction, article archive, and portfolio showcase</div>
      </div>
    </div>

    <div class="spotlight-card">
      <p class="eyebrow">Vision</p>
      <h2>Learning with purpose and consistency</h2>
      <p>I want to keep improving my technical knowledge, communication skills, and problem-solving ability while building a strong academic and professional future in Computer Engineering.</p>
    </div>
  </div>
</section>

<section class="page-panel section-block">
  <p class="eyebrow">Latest Articles</p>
  <h2>Most recent posts</h2>
  <div class="post-list">
    {% for post in site.posts limit: 3 %}
    <article class="post-card">
      <p class="post-card-meta">{{ post.date | date: site.date_format }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 180 }}</p>
      <a class="text-link" href="{{ post.url | relative_url }}">Read full article</a>
    </article>
    {% endfor %}
  </div>
</section>
