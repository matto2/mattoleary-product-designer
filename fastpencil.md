---
layout: layouts/home.njk
tags:
  - discovery
  - usability testing
  - ux design
  - interaction design
---

<!-- <a href="/" class="arrows">
HOME</a> / -->

<div class="bottom-arrows"><a href="/">Home</a></div>

# FastPencil self-publishing platform

<!-- <ul class="horizontal-list">
{% for tag in tags %}
  <li><a href="/tags/{{ tag }}">{{ tag }}</a></li>
{% endfor %}
</ul> -->

<ul class="horizontal-list">
{% for tag in tags %}
  <li>{{ tag }}</li>
{% endfor %}
</ul>

![fastpencil landing page](/img/fp-home2.jpg)

### Background

FastPencil is a web-based publishing platform that allows authors, publishers, and enterprises to create books in print and EPUB formats and have them distributed online on all major book selling channels including Amazon and Ingram. While I was leading design there it became necessary to rebuild the front-end technology and UI on order to offer a white-label version of the platform so I led this effort.

### Hypothesis

The original design of the publishing platform was heavily branded without the flexibility to allow other companies to easily create a version of their own on top of the software. A new design was required to enable white-labeling. Also, during the redesign, every effort should be made to identify and fix any areas of the app with poor usability.

### Research

As part of a small team, I helped analyze hundreds support tickets to discover areas where users were struggling or had questions with what to do or would happen next. We also analyzed results of a large survey asking customers to provide general feedback on the service.

### Key Takeaways

• There are too many choices per view.
• Users don't know what to do at key junctions in the publishing process.

### Prototyping

I created an html prototype with Bootstrap that with an emphasis on simplicity and making the most common actions visually prominent while still supporting other possible flows. Along with the CEO I presented this prototype to many prospective customers and investors. Based on their feedback and questions I iterated on the prototype and tracked reactions to changes.

### Development

I worked closely with the development team to build out the production versions - both the FastPencil (self-branded version) as well as the white-label/ brandable version.

### Outcome

FastPencil was acquired by Courier Corporation in large part based on the updated and brandable publishing platform.

<div class="bottom-arrows"><a href="/">Home</a></div>
