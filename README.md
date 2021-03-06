#### Static Site and Styleguide Generator with Gulp

SSGG is a Gulp based tool and workflow generating static websites together with the associated styleguide.

#### Technologies

* JSON &mdash; Common interface elements and declarations re-used by the site and the styleguide are stored into a JSON file database
* SWIG &mdash; Transforms JSON data and content into HTML, CSS and JS.
* KSS &mdash; Knyle Style Sheets adds documentation to CSS files which are later displayed by the styleguide

Read more about about the idea [in this post](https://medium.com/@metamn/creating-a-styleguide-with-gulp-2298fc928086).

#### Front-end best practices

Beside generating a site and styleguide SSGG incorporates front-end best practices via various Gulp tasks:

* Responsive images &mdash; Resize, optimize, compress images for various devices
* Minify &mdash; Compress HTML, CSS and JS
* PureCSS &mdash; Cross browser compatibility
* BEM &mdash; Naming and organizing components, files and folders in a commonly understandable way

#### Roll Your Own

SSGG is highly customizable and extendable. You can adapt easily to your specific needs.

#### Documentation

See the [wiki](https://github.com/metamn/ssgg/wiki).

#### Demo

A quick demo is found in this repository to showcase the basic capabilities of SSGG:

* creating responsive images
* displaying an item in the styleguide


##### Install

```
git clone https://github.com/metamn/ssgg
cd ssgg
[sudo] npm install
```

##### Run

```
gulp images
gulp
gulp styleguide
gulp server
```

#### License
(c) 2015 Bartus Csongor. Licensed under [GPL v2.0](http://choosealicense.com/licenses/gpl-2.0/).
