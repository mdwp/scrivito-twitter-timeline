# Scrivito Twitter Timeline
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A Twitter timeline React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-twitter-timeline/master/twitter-timeline-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-twitter-timeline
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-twitter-timeline";
```

Make the following changes in your '_headersCsp.json' in the public directory of your Scrivito App:

```
"script-src": [
        "'self'",
        "https://api.scrivito.com",
        "https://app.intercom.io",
        "https://assets.scrivito.com",
        "https://js.intercomcdn.com",
        "https://widget.intercom.io",
        "https://www.google-analytics.com",
        "https://maps.googleapis.com/maps/api/js",
        "https://platform.twitter.com/widgets.js",
        "https://platform.twitter.com/js/",
        "https://cdn.syndication.twimg.com/timeline/profile"
    ],
````

## Development

With `npm run build` you can build the package into `build/`.

With `npm start` you'll start a continues process, that rebuilds `build/` automatically once the source code is changed.

To add this library locally do the following in your scrivito app:

```
npm install file:<path to build folder>
```

e.g.

```
npm install file:../scrivito-twitter-timeline/build/
```

To publish the package:

```
npm i && npm run build && cd build/ && npm publish
```

## Check code quality

With `npm run eslint` and `npm run es-check` you can check your coding quality.



