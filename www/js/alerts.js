var ALERT_TITLE = "Message";
var ALERT_OK_BUTTON_TEXT = "OK";

if(document.getElementById) {
window.alert = function(txt) {createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {

	var modals= document.getElementsByClassName("modalContainers");

	var modalId = "modalContainer"+modals.length;
	if(modals.length==0){sessionStorage.clear();}

	if(modals.length!=0 && sessionStorage.getItem(txt)!="" && sessionStorage.getItem(txt)!=null){sessionStorage.setItem(txt, false);}

	mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
	mObj.className="modalContainers";
	mObj.id = modalId;
	mObj.style.height = document.documentElement.scrollHeight + "px";

	Obj = mObj.appendChild(document.createElement("div"));
	Obj.id = "alertBox";
	Obj.style.visiblity="visible";

	mtitle = Obj.appendChild(document.createElement("div"));
	mtitle.id = "alertTitle";
	mtitle.appendChild(document.createTextNode(ALERT_TITLE));

	msg = Obj.appendChild(document.createElement("p"));
	//msg.appendChild(document.createTextNode(txt));
	if((sessionStorage.getItem(txt)!="") && (sessionStorage.getItem(txt)!=null))
	{var val = sessionStorage.getItem(txt); msg.innerHTML = val;
	} else { msg.innerHTML = txt;}

	mok = Obj.appendChild(document.createElement("button"));
	mok.type = "button"
	mok.id = "cancelBtn";
	mok.appendChild(document.createTextNode(ALERT_OK_BUTTON_TEXT));
	mok.onclick = "#";
	mok.focus();
	mok.onclick = function() {
		sessionStorage.removeItem(txt);
		if(sessionStorage.getItem(txt)!="" && sessionStorage.getItem(txt)!=null){sessionStorage.setItem(txt, false);}
		removeCustomAlert(modalId);
		return false; }

	$("#"+modalId).css("z-index", (10000-modals.length)+"");
	Obj.style.display = "block";

}

var CONFIRM_TITLE = "Message";
var CONFIRM_OK_BUTTON_TEXT = "YES";
var CONFIRM_CANCEL_BUTTON_TEXT = "NO";

if(document.getElementById) {
window.confirm = function(txt) {createCustomConfirm(txt);
	}
}

function createCustomConfirm(txt) {


	var modals= document.getElementsByClassName("modalContainers");

	var modalId = "modalContainer"+modals.length;
	if(modals.length==0){sessionStorage.clear();}

	if(modals.length!=0 && sessionStorage.getItem(txt)!="" && sessionStorage.getItem(txt)!=null){sessionStorage.setItem(txt, false);}

	mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
	mObj.className="modalContainers";
	mObj.id = modalId;
	mObj.style.height = document.documentElement.scrollHeight + "px";

	Obj = mObj.appendChild(document.createElement("div"));
	Obj.id = "confirmBox";
	Obj.style.visiblity="visible";

	mtitle = Obj.appendChild(document.createElement("div"));
	mtitle.id = "confirmTitle";
	mtitle.appendChild(document.createTextNode(CONFIRM_TITLE));

	msg = Obj.appendChild(document.createElement("p"));
	//msg.appendChild(document.createTextNode(txt));
	if((sessionStorage.getItem(txt)!="") && (sessionStorage.getItem(txt)!=null))
	{var val = sessionStorage.getItem(txt); msg.innerHTML = val;
	} else { msg.innerHTML = txt;}

	mok = Obj.appendChild(document.createElement("button"));
	mok.type = "button"
	mok.id = "okBtn";
	mok.appendChild(document.createTextNode(CONFIRM_OK_BUTTON_TEXT));
	mok.onclick = "#";
	mok.focus();
	mok.onclick = function() {
		sessionStorage.removeItem(txt);
		if(sessionStorage.getItem(txt)!="" && sessionStorage.getItem(txt)!=null){sessionStorage.setItem(txt, true);}
		removeCustomAlert(modalId);
		return true;
		}

	mcancel = Obj.appendChild(document.createElement("button"));
	mcancel.type = "button"
	mcancel.id = "cancelBtn";
	mcancel.appendChild(document.createTextNode(CONFIRM_CANCEL_BUTTON_TEXT));
	mcancel.onclick = "#";
	mcancel.focus();
	mcancel.onclick = function() {
		sessionStorage.removeItem(txt);
		if(sessionStorage.getItem(txt)!="" && sessionStorage.getItem(txt)!=null){sessionStorage.setItem(txt, false);}
		removeCustomAlert(modalId);
		return false;
		}

	$("#"+modalId).css("z-index", (10000-modals.length)+"");
	Obj.style.display = "block";

}

function removeCustomAlert(id) {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById(id));
	var modals= document.getElementsByClassName("modalContainers");
	if(modals.length==0){sessionStorage.clear();}
}