### Static Site and Styleguide Generator with Gulp

SSGG is a Gulp based tool and workflow generating static websites together with the associated styleguide.

### Features

* JSON &mdash; Common interface elements and declarations re-used by the site and the styleguide are stored into a JSON file database
* [SWIG](http://paularmstrong.github.io/swig/) &mdash; Transforms JSON data and content into HTML, CSS and JS.
* KSS &mdash; [Knyle Style Sheets](http://warpspire.com/kss/) adds documentation to CSS files which are later displayed by the styleguide

Read more about about the idea [in this post](https://medium.com/@metamn/creating-a-styleguide-with-gulp-2298fc928086).

### Front-end best practices

Beside generating a site and styleguide SSGG incorporates front-end best practices via various Gulp tasks:

* Responsive images &mdash; Resize, optimize, compress images for various devices
* Minify &mdash; Compress HTML, CSS and JS
* PureCSS &mdash; Cross browser compatibility
* [BEM](https://en.bem.info/) &mdash; Naming and organizing components, files and folders in a commonly understandable way

### Roll Your Own

SSGG is highly customizable and extendable. You can adapt easily to your specific needs.

### Documentation

See the [wiki](https://github.com/metamn/ssgg/wiki).

### Usage

```
git clone https://github.com/metamn/ssgg
cd ssgg
[sudo] npm install
```

```
gulp images
gulp
gulp styleguide
gulp server
```

### License
(c) 2015 Bartus Csongor. Licensed under [GPL v2.0](http://choosealicense.com/licenses/gpl-2.0/).
