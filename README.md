![BlackTie.js logo](/images/logo.png "BlackTie.js logo")

BlackTie is a framework to build **cross-platform** and **cross-device** applications using Apache Cordova that have the look and feel of a native app. Create seamless applications with minimal effort from scratch or power your existing application by simply integrating BlackTie into it.

> **All you need to know is HTML & CSS and you can leave the rest to BlackTie!**

# What is Apache Cordova?

Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone. Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.

# Browser and Device Support

BlackTie is focussed on creating applications that are compatible with all browsers and devices. Every feature in the framework is tested on multiple browsers and devices.

## Setup

Copy all files from www/js, www/css and www/fonts to your applications www folder.
Add these lines in the head tag of index.html as:

    <head>
    ..
    <!-- BlackTie CSS -->
    <link rel="stylesheet" type="text/css" href="./css/blacktie.css" />
    <!-- Font-Family CSS -->
    <link href='./css/font-family.css' rel='stylesheet' type='text/css'>
    ..
    </head>

Add these lines before closing body tag of index.html as:

    <body>
    ..
    <!-- BlackTie -->
    <script src="./js/blacktie.js" type="text/javascript"></script>
    </body>

## Contributing

Create a pull request and it will be merged.

To edit javascript, open the file:

    /www/js/blacktie.js

To edit css, open the file:

    /www/css/blacktie.css

## Code of Conduct

Visit our [Code of Conduct](CODE_OF_CONDUCT.md) page for an overview on our ground rules.

# Usage

Initialize BlackTie

    var demo = blacktie.init();

The following features are available in BlackTie framework

## Hamburger navigation menu

To add a hamburger menu setup BlackTie and add this code inside body element of index.html

    <ul id="ham-menu">
    <li class="ham-item"><a href="#">Item one</a></li>
    <li class="ham-item"><a href="#">Item two</a></li>
    <li class="ham-item"><a href="#">Item three</a></li>
    <li class="ham-item"><a href="#">Item four</a></li>
    </ul>
    
All other elements must come under the container div element below this ul tag.

    <div id="container">
    ..
    //app body content goes here
    ..
    </div>

In your index.js file,
    
    demo.hammenu();

### Debugging

demo.log(msg): Logs a message to console

### UI

demo.notify(msg,type): Shows an elegant notification message. Leave 'type' as blank for default notification

demo.setContent(content): Sets the content of the containing body element

demo.setStyle(style, targetId): Sets the style of the target element. Use '#elementID' for an element with id and '.class' for elements in a class

demo.createCard(title,buttons,callbacks): Creates a card element

demo.openPage(pageurl): Opens a page in the containing body

demo.showLoading(): Shows a loading element

demo.hideLoading(): Hides the loading element

### Network

demo.openOauth(baseurl, tokenurl, clientid, apikey, scope, responsetype, other, callback): Opens an oauth connection to a service

demo.sendRequest(url, method, data, headers, callback): Sends a get or post request

### Storage

demo.setItem(key, value): Stores a <key,vaue> pair to localStorage

demo.getItem(key): Gets the value for a specified key in localStorage

demo.setVal(key, value): Stores a <key,vaue> pair to sessionStorage

demo.getVal(key): Gets the value for a specified key in sessionStorage

# License

Created and Maintained by Divakar Manivel. Licensed under [MIT](LICENSE).
