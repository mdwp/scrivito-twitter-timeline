# Scrivito Twitter Timeline
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A Twitter timeline React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-twitter-timeline/master/twitter-timeline-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-twitter-timeline
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-twitter-timeline";
```

Add the following lines to your '_headersCsp.json' in the public directory of your Scrivito App:

```json
"script-src": [

        "https://platform.twitter.com/widgets.js",
        "https://platform.twitter.com/js/",
        "https://cdn.syndication.twimg.com/timeline/profile"
    ],
```

## Widget properties

In the widget properties you can set:
- Twitter name e.g. "scrivito"