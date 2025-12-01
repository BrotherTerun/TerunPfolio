---
layout: section
title: "Проекты"
---

<ul class="projects-grid">
  {% for p in site.projects %}
    <li class="project-card">
      <a href="{{ p.url | relative_url }}">
        <img src="{{ p.thumb | relative_url }}" alt="{{ p.title }}">
        <h3>{{ p.title }}</h3>
        <p>{{ p.roles | join: ", " }}</p>
      </a>
    </li>
  {% endfor %}
</ul>
