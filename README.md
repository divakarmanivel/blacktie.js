# BlackTie.js

> BlackTie is an attempt to make apps that are built using cordova have uniformity and more importantly to help create cordova apps easily.

## To contribute

To edit js, open the file:

    /www/js/blacktie.js

To edit js, open the file:

    /www/css/blacktie.css

I would recommend adding a seperate js/css file in the respective folders for ease of use. They can be added to the main file if need be.

## Setup

Add blacktie.js inside your www/js as

    /www/js/blacktie.js

Add blacktie.css inside your www/css as

    /www/css/blacktie.css

Add font-family.css inside your www/css as

    /www/css/font-family.css

Add Dosis-Medium font inside your www/fonts as

    /www/fonts/Dosis-Medium.ttf

Add index.js inside your www/js as

    /www/js/index.js

You can edit this index file to your needs.

### Hamburger menu

To add a hamburger menu setup peach and add this code inside body element

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
