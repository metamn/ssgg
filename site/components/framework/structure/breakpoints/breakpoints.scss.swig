// Breakpoints
//
// Used to adapt content and design to devices.
//
// Styleguide breakpoints

{% for breakpoint in breakpoints %}
// {{ breakpoint.description }}
$breakpoint-{{ breakpoint.name }}: {{ breakpoint.value }};
{% endfor %}


{% for mixin in responsive_mixins %}
@mixin {{ mixin.name }} {
  @media only screen and {{ mixin.media_query }} {
    @content
  }
}
{% endfor %}
