// Colors
//
// The colors together with the color pairs.
// Colors don't exist alone yet in pairs, like black on white.
// All color pairs have a contrast ratio set for perfect readability using [Lea Verou's contrast checking tool](http://leaverou.github.io/contrast-ratio/).
//
// Styleguide colors
{% for color in colors %}
// {{ color.description }}
${{ color.name }}: {{ color.value }};
{% endfor %}

// Color combinations. Colors are not used standalone but in pairs
@mixin colors($name) {
{% for pair in color_pairs %}
  @if ($name == '{{ pair.name }}') {
    {% for property in pair.properties %}{{ property.name }}: {{ property.value }};
    {% endfor %}
  }
{% endfor %}
}

// Color classes
{% for color in colors %}
.{{ color.name }} {
  background: {{ color.value }};
};
{% endfor %}

// Color pair classes
{% for pair in color_pairs %}
.{{ pair.name }} {
  {% for property in pair.properties %}{{ property.name }}: {{ property.value }};
  {% endfor %}
}
{% endfor %}
