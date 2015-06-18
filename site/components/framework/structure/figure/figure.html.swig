<figure {% if image.class %} class="{{ image.class }}" {% endif %}>
  {% if image.url %}
    <a class="link" href="{{ site.url}}{{ image.url }}" title="{{ image.title }}">
  {% endif %}

  <!-- The default extension is .png but other formats are handled too -->
  {% set extension = '.png' %}
  {% if image.extension %}
    {% set extension = image.extension %}
  {% endif %}

  <!-- Naming convention for responsive images -->
  {% set desktop = image.name + '_desktop' + extension %}
  {% set desktop2x = image.name + '_desktop2x' + extension %}
  {% set laptop = image.name + '_laptop' + extension %}
  {% set laptop2x = image.name + '_laptop2x' + extension %}
  {% set tablet = image.name + '_tablet' + extension %}
  {% set tablet2x = image.name + '_tablet2x' + extension %}
  {% set mobile = image.name + '_mobile' + extension %}
  {% set mobile2x = image.name + '_mobile2x' + extension %}


  <!-- Showing different images for different devices -->
  {% for responsive in image.responsive %}
    {% if responsive.breakpoint == 'desktop' %}
      {% set desktop = responsive.name + '_desktop' + extension %}
      {% set desktop2x = responsive.name + '_desktop2x' + extension %}
    {% endif %}
    {% if responsive.breakpoint == 'laptop' %}
      {% set laptop = responsive.name + '_laptop' + extension %}
      {% set laptop2x = responsive.name + '_laptop2x' + extension %}
    {% endif %}
    {% if responsive.breakpoint == 'tablet' %}
      {% set tablet = responsive.name + '_tablet' + extension %}
      {% set tablet2x = responsive.name + '_tablet2x' + extension %}
    {% endif %}
    {% if responsive.breakpoint == 'mobile' %}
      {% set mobile = responsive.name + '_mobile' + extension %}
      {% set mobile2x = responsive.name + '_mobile2x' + extension %}
    {% endif %}
  {% endfor %}


  <!-- Figcaption is image title unless is not set explicitely -->
  {% set figcaption = image.title %}
  {% set figcaption_class = 'figcaption--from-title' %}

  {% if image.figcaption %}
    {% set figcaption = image.figcaption %}
    {% set figcaption_class = 'figcaption' %}
  {% endif %}


  <!-- Images are served from /site also for /styleguide -->
  {% set site_url = site.url %}
  {% if image.site_url %}
    {% set site_url = image.site_url %}
  {% endif %}


  <picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
    <source media="(min-width: 1600px)" srcset="{{ site_url }}assets/images/{{ desktop }}, {{ site_url }}assets/images/{{ desktop2x }} 2x">
    <source media="(min-width: 1199px)" srcset="{{ site_url }}assets/images/{{ laptop }}, {{ site_url }}assets/images/{{ laptop2x }} 2x">
    <source media="(min-width: 600px)" srcset="{{ site_url }}assets/images/{{ tablet }}, {{ site_url }}assets/images/{{ tablet2x }} 2x">
    <source srcset="{{ site_url }}assets/images/{{ mobile }}, {{ site_url }}assets/images/{{ mobile2x }} 2x">
    <!--[if IE 9]></video><![endif]-->
    <img srcset="{{ site_url }}assets/images/{{ desktop }}" alt="{{ image.title }}">
  </picture>

  <figcaption class="figcaption {{ figcaption_class }}">
    {{ figcaption | safe }}
  </figcaption>

  {% if image.url %}</a>{% endif %}
</figure>
