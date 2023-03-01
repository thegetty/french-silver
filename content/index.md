---
title: Cover
order: 1
layout: cover
menu: false
toc: false
outputs: [html]
image: cat-6-1--detail.jpg
---

{% if publication.additional_contributors %}
<div class="cover-authors">
  {{ publication.additional_contributors }}
</div>
{% endif %}

{{ publication.description.full }}
