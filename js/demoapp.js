var demo = blacktie.init();
demo.hammenu();
demo.notify("great notification! ", "success");
document.getElementById("click").onclick = function () {
    demo.setContent("<p>New Content!</p>");
};
var style = '{"backgroundColor":"Red", "color":"White"}';
document.getElementById("color").onclick = function () {
    demo.setStyle(style, "#color");
};
document.getElementById("cards").onclick = function () {
    var cards = {};
    var card = demo.createCard("new card");
    var button = demo.createButton("OK", function () {
        demo.notify("OK button clicked");
    });
    card.button1 = button;
    cards.card1 = card;
    cards.card2 = card;
    demo.createCards(cards);
};

////////////////////////////////////////////////////////////
//Test functions and functoions that need implementations//
//////////////////////////////////////////////////////////

/*
function ct() {
	createDb("test", "num integer");
	addRow("test", "num", "2");
	var names = "";
	db.transaction(function (tx) {
		names = tx.executeSql("SELECT column_name FROM information_schema.columns WHERE table_name = '" + name + "'");
	});
	log(names);
	return false;
}

function diags() {
	notify("A notification for you!");
	return false;
}

function createTable(name) {
	var names = "";
	db.transaction(function (tx) {
		names = tx.executeSql("SELECT column_name FROM information_schema.columns WHERE table_name = '" + name + "'");
	});
	log(names);

	var html = '<table id="table" data-role="table" data-mode="column" class="ui-responsive"><thead><tr><th>Field</th><th>Info</th></tr></thead><tbody>';
	html = html + "<tr><td>" + "Name" + "</td><td>" + name + "</td></tr>";
	html = html + "<tr><td>" + "Gender" + "</td><td>" + gender + "</td></tr>";
	html = html + "<tr><td>" + "Picture" + "</td><td><img src='" + picture.data.url + "' /></td></tr>";

	html = html + "</tbody></table>";

	return html;
}

function imagemk() {
	var img = new Image();
	img.load("http://www.gettyimages.co.uk/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg");
	document.getElementById("imager").appendChild(img);
	return false;
}

function loginSuccess() {
	$("#btn-login").css("display", "none");
	notify("Login success!", "success");
	var response = aget("https://www.googleapis.com/blogger/v3/users/self/blogs?fields=items(id%2Cname%2Cpages%2FtotalItems%2Cposts%2FtotalItems)");

	if (response.hasOwnProperty("items")) {
		response.items.forEach(function (entry) {

			entry.name;
			entry.id;
			entry.pages.totalItems;
			entry.posts.totalItems;
		});
	}

	var html = "";
	setContent(html);
	return false;
}

function createCards() {
	var cardsDiv = document.createElement("div");
	cardsDiv.className = "cards";
	var titles = "1,2,3",
		buttons = "a,b;c;d,e,f",
		callbacks = "diags(),diags();diags();diags(),diags(),diags()";
	titles = titles.split(",");
	buttons = buttons.split(";");
	callbacks = callbacks.split(";");
	for (var i = 0; i < 3; i++) {
		var card = createCard(titles[i], buttons[i], callbacks[i]);
		cardsDiv.appendChild(card);
	}
	$("#container").append(cardsDiv);
	return false;
}

function aget(url) {
	var connectionstatus = window.navigator.onLine;
	if (!connectionstatus) {
		log("no internet connection");
		notify("Unable to connect to the Internet.\nPlease check your network connection and try again.", "error");
		hideLoading();
		return false;
	}
	var oauth_token = "Bearer " + getItem("oauth_token");
	var headers = {
		Authorization: oauth_token
	};
	headers = JSON.stringify(headers);
	$.ajax({
		url: url,
		type: 'GET',
		headers: headers,
		dataType: 'json',
		success: function (data) {
			return JSON.stringify(data);
		}
	});
}

*/