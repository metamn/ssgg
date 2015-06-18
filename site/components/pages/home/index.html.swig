<h1>Home</h1>

{% for image in home.images %}
  {% set image = image %}
  {% include '../../framework/structure/figure/figure.html.swig' %}
{% endfor %}
