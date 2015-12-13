This repository contains the source code for the skeleton FootworkJS application:

Specifications of (whats included in) this skeleton application:

* Uses [Bower](http://bower.io/) for frontend dependencies
* Uses [Gulp](http://gulpjs.com/) for tasks
* Uses [RequireJS](http://requirejs.org/) + [text plugin](https://github.com/requirejs/text) (so Footwork can automatically load assets)
  * Includes r.js for optimization and includes example working build.js
* Includes example router, viewModel, and component
* Includes Bootstrap3 via Bower

Files/directories of note:

* ```public/index.html``` - Main index HTML file
* ```public/scripts/main.js``` - Application main starting module
* ```public/scripts/app/assets.js``` - Footwork viewModel/component/etc asset registrations
* ```public/scripts/app/viewModel/ExampleViewModel.js``` - Example viewModel
* ```public/scripts/component/my-component``` - Example component
* ```public/scripts/require-config.js``` - RequireJS configuration

------

### Running this code/website

1) **Clone the repo from here:**

```bash
git clone git@github.com:footworkjs/skeleton-app.git
cd skeleton-app
```

2) **Acquire npm and bower (javascript) dependencies:**

Make sure you have [node.js](http://nodejs.org/) and [bower](http://bower.io/) installed in your environment, then run the following:

```bash
npm install && bower install
```

3) **Run the local webserver:** (if necessary)

If you are not running this on a pre-existing server which already has an HTTP provider (Apache, nginx, etc) then you will need to run the local webserver in order to view the application. First off, make sure you have [Gulp](http://gulpjs.com) installed, then run:

```bash
gulp webserver
```

You can now access the site at: [http://localhost:8000](http://localhost:8000) (or whatever host you have it running on, this assumes localhost)

### Other Included Tasks

```bash
# Compile the LESS into CSS and bundle/compile/optimize the javascript
gulp
```

```bash
# Watch the CSS and Javascript files for changes and recompile the assets as needed
gulp watch

# Watch the CSS files for changes and recompile as needed
gulp watch-css

# Watch the Javascript files for changes and recompile as needed
gulp watch-js
```

```bash
# Run the unit tests under /spec (TODO: HOWTO/Info on testing with footwork)
gulp tests
```

```bash
# Compile the LESS into CSS
gulp build-css
```

```bash
# Bundle/optimize the javascript (the RequireJS config is located in public/scripts/require-config.js)
gulp build-js
```