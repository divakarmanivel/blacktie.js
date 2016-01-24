var db ;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
            document.addEventListener("deviceready", this.onDeviceReady, false);
            document.addEventListener("load", this.onLoad, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		db = window.sqlitePlugin.openDatabase({name: "saved_database", androidLockWorkaround: 1});
    },

    onLoad: function() {
		app.overrideBrowserAlert();
	},

    overrideBrowserAlert: function() {
		var title = document.getElementsByTagName("title")[0].innerHTML;
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    title, // title
                    'OK'        // buttonName
                );
            };
        }
    }

};
app.initialize();
