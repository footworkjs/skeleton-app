This repository contains the source code for the skeleton FootworkJS application:

Demo: [example-app.footworkjs.com](http://example-app.footworkjs.com)

Specifications of (whats included in) this skeleton application:

* Uses bower for frontend dependencies
* Uses Gulp for tasks
* Implements RequireJS + text plugin
  * Includes r.js for optimization and includes example working build.js
* Includes example router, viewModel, and component

Files/directories of note:

* ```public/index.html``` - Main index HTML file
* ```public/scripts/component``` - Components folder
* ```public/scripts/Router.js``` - Example router
* ```public/scripts/viewModel.js``` - Example viewModel

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
# Compile the LESS into CSS
gulp build-css
```

```bash
# Bundle/optimize the javascript (the RequireJS config is located in public/scripts/require-config.js)
gulp build-js
```