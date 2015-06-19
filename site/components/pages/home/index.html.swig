<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link href="{{ site.url }}assets/styles/site.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <!-- Picturefill Responsive Images -->
    <script async src="{{ site.url }}assets/scripts/picturefill.min.js"></script>
  </head>

  <body>

    {% for image in home.images %}
      {% set image = image %}
      {% include '../../framework/structure/figure/figure.html.swig' %}
    {% endfor %}

  </body>
</html>
