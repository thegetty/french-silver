---
layout: base.11ty.js
order: 1.3
outputs: [pdf, epub]
toc: false
menu: false
---

<div class="half-title-page">
  {% if publication.title %}
  <span class="title-htp">
    {{ publication.title }}
  </span>
  {% endif %}
</div>
