var Clicker = function() {

    var clicker = {
        initialize: function() {
        this.bindEvents();
        },

        bindEvents: function() {
			this.onLoad();
        },

    onLoad: function() {
	        	$(".btn").click(function(){
				var fnstring = $(this).data("onclick");
				var func = window[fnstring]();
				if(typeof fn ==="function") func();
				});
    }

    }
    clicker.initialize();
    return clicker;
}
