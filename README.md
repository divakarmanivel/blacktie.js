# BlackTie.js

> BlackTie is an attempt to make cross platform apps that are built using cordova have uniformity and more importantly to help create cordova apps easily.

## Hamburger menu

To add a hamburger menu setup BlackTie and add this code inside body element

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

## Functions

The following functions are available in BlackTie

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

## To contribute

To edit js, open the file:

    /www/js/blacktie.js

To edit css, open the file:

    /www/css/blacktie.css

I would recommend adding a seperate js/css file in the respective folders for ease of use. They can be added to the main file if needed.

## Setup

Copy all files from www/js, www/css and www/fonts to your applications www folder.
Add these lines in the head tag as:
        <head>
        ..
        <!-- BlackTie CSS -->
        <link rel="stylesheet" type="text/css" href="./css/blacktie.css" />
        <!-- Font-Family CSS -->
		<link href='./css/font-family.css' rel='stylesheet' type='text/css'>
		..
		</head>
		
Add these lines before closing body tag as:
		<body>
		..
		<!-- JQuery -->
        <script src="./js/lib/jquery.min.js" type="text/javascript"></script>
        <!-- BlackTie -->
        <script src="./js/blacktie.js" type="text/javascript"></script>
		</body>
