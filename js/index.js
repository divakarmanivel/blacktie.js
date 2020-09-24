var demo = blacktie.init();
demo.hammenu();

demo.notify("Successfully launched!", "success");

document.getElementById("star").onclick = function () {
	var burger = demo.createStarCard("BlackTie.js", "./images/icon.png", 10);
    demo.addElement(burger);
};

////////////////////////////////////////////////////////////
//Test functions and functions that need implementations//
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
	img.src = "http://www.gettyimages.co.uk/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg";
	document.getElementById("imager").appendChild(img);
	return false;
}
imagemk();

*/