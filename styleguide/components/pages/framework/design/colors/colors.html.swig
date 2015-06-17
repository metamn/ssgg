
<h1>Colors / Styleguide</h1>


<p>Color definitions:</p>
<ul>
  {% for color in colors %}
    <li>{{ color.name }}: {{ color.value }}</li>
  {% endfor %}
</ul>


<p>The KSS description:</p>
{% set c = kss | first %}
{{ c.description | safe }}
