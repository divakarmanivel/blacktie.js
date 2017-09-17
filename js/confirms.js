var CONFIRM_TITLE = "Message";
var CONFIRM_OK_BUTTON_TEXT = "YES";
var CONFIRM_CANCEL_BUTTON_TEXT = "NO";

if (document.getElementById) {
	window.confirm = function (txt) {
		createCustomConfirm(txt);
	};
}

function createCustomConfirm(txt) {

	if (document.getElementById("confirmModalContainer")) return;

	mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
	mObj.id = "confirmModalContainer";
	mObj.style.height = document.documentElement.scrollHeight + "px";

	confirmObj = mObj.appendChild(document.createElement("div"));
	confirmObj.id = "confirmBox";
	confirmObj.style.visiblity = "visible";

	confirmtitle = confirmObj.appendChild(document.createElement("div"));
	confirmtitle.id = "confirmTitle";
	confirmtitle.appendChild(document.createTextNode(CONFIRM_TITLE));

	msg = confirmObj.appendChild(document.createElement("p"));
	//msg.appendChild(document.createTextNode(txt));
	msg.innerHTML = txt;

	okBtn = confirmObj.appendChild(document.createElement("button"));
	okBtn.type = "button";
	okBtn.id = "okBtn";
	okBtn.appendChild(document.createTextNode(CONFIRM_OK_BUTTON_TEXT));
	okBtn.onclick = "#";
	okBtn.focus();
	okBtn.onclick = function () {
		removeCustomAlert("confirmModalContainer");
		return false;
	};

	cancelBtn = confirmObj.appendChild(document.createElement("button"));
	cancelBtn.type = "button";
	cancelBtn.id = "cancelBtn";
	cancelBtn.appendChild(document.createTextNode(CONFIRM_CANCEL_BUTTON_TEXT));
	cancelBtn.onclick = "#";
	cancelBtn.focus();
	cancelBtn.onclick = function () {
		removeCustomAlert("confirmModalContainer");
		return false;
	};

	confirmObj.style.display = "block";

}

function removeCustomAlert(id) {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById(id));
}