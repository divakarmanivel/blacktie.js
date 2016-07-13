# BlackTie.js

> BlackTie is a framework to build cross platform HTML/CSS/JavaScript applications using Apache Cordova that have the look and feel of a native app. Create seamless applications with minimal effort from scratch or bootstrap your existing application by simply integrating BlackTie into it.

> **All you need to know is HTML and CSS and you can leave the rest to BlackTie!**

# What is Apache Cordova?

> Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone. Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set of code to target nearly every phone or tablet on the market today and publish to their app stores.

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
    <!-- JQuery -->
    <script src="./js/lib/jquery.min.js" type="text/javascript"></script>
    <!-- BlackTie -->
    <script src="./js/blacktie.js" type="text/javascript"></script>
    </body>

## To contribute

Create a pull request and it will be merged.

To edit javascript, open the file:

    /www/js/blacktie.js

To edit css, open the file:

    /www/css/blacktie.css

# Features

The following features are available in BlackTie framework

## Hamburger menu

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

### Debugging

log(msg): logs a message to console

### UI

notify(msg,type): shows an elegant notification message

setContent(content): sets the content of the containing body element

setStyle(style, targetId): sets the style of the target element

createCard(title,buttons,callbacks): creates a card element

openPage(pageurl): opens a page in the containing body

showLoading(): shows a loading element

hideLoading(): hides the loading element

### Network

openOauth(baseurl, tokenurl, clientid, apikey, scope, responsetype, other, callback): opens an oauth connection to a service

sendRequest(url, method, data, headers, callback): sends a get or post request

### Data

setItem(key, value): stores a <key,vaue> pair to localStorage

getItem(key): gets the value for a specified key in localStorage

setVal(key, value): stores a <key,vaue> pair to sessionStorage

getVal(key): gets the value for a specified key in sessionStorage

### Database

createDb(name, columns): creates a database with specified name

addRow(name,columns,values): adds a row to the database

addColumn(name,column): adds a column to the database

