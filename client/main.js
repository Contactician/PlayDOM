var csInterface = new CSInterface();
var appSkin = csInterface.hostEnvironment.appSkinInfo;
var sysPath = csInterface.getSystemPath(SystemPath.EXTENSION);
var logPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/log/";
var hostPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/host/";

// Loading stack from libraries
buildUI();
logSkin(appSkin);
loadBorderWidth();
console.log(`Loading for ${appInfo.name}`);
loadJSX(`json2.jsx`);

var chart = document.getElementById('chart');

var data = {
	text: "none"
};

var ADOM = {
	app: {
		name: "app.name",
		activeDocument: "app.activeDocument",
		documents: ["app.documents"],
		local: "app.locale"
	},
	$: {
		version: "$.version",
		fileName: "$.fileName"
	}
};

// for (tier1 in ADOM) {
	// var node = chart.appendChild(document.createElement('li'));
	// node.setAttribute("class", "node")
  // node.appendChild(document.createTextNode(tier1));
	// node.style.width = ""
  // edit = container.appendChild(document.createElement('a'));
  // edit.setAttribute("title", "Edit");
	// console.log(this.__adobe_cep__);
// 	console.log(tier1);
// }

// var tType = document.getElementById('type');
// var tExam = document.getElementById('example');
// var tDesc = document.getElementById('descript');
// var tPath = document.getElementById('path');
//
// tType.style.display = 'none';
// tExam.style.display = 'none';
// tDesc.style.display = 'none';
// tPath.style.display = 'none';

for (tier1 in ADOM) {
	console.log(this.__adobe_cep__);
	console.log(tier1);
}




function toConsole(what) {
	var event = new CSEvent('com.playwrite.console', 'APPLICATION');
	event.data = what;
	csInterface.dispatchEvent(event)
}
// toConsole("Hello World");

function toEditor(what) {
	var event = new CSEvent('com.playwrite.write', 'APPLICATION');
	event.data = what;
	csInterface.dispatchEvent(event)
}
// toConsole("Hello World");

var pen = document.getElementsByClassName('icon-pen');
pen = [].slice.call(pen);
pen.forEach(function(v,i,a) {
	v.style.color = "white";
	// v.addEventListener("click", function(event){
	// 	sendPathToConsole(v);
	// })
});

var suffix = document.getElementsByClassName('preObj');
suffix = [].slice.call(suffix);
suffix.forEach(function(v,i,a){
	v.addEventListener("click", function(evt){

	})
});


var tip = document.getElementsByTagName('li');
tip = [].slice.call(tip);
tip.forEach(function(v,i,a) {
	v.addEventListener("click", function(event){
		sendPathToConsole(v);
	})
});

function sendPathToConsole(v){
	toConsole(findAncestors(v));
	toEditor(findAncestors(v));
}


function findAncestors(v){
	var res = "";
	var prior = "";
	var where = "";
	var t, n, tier, m, depth1, depth2, depth3;
	if (v.parentNode.tagName = "ul") {
		t = v.parentNode.parentNode;
		if (t.parentNode.tagName = "ul") {
			n = t.parentNode.parentNode;
			depth1 = n.parentNode.parentNode.children[0].textContent;
			depth2 = n.parentNode.children[0].textContent;
			depth1 = n.parentNode.parentNode.parentNode.children[0].textContent;
			if (depth1 !== 'Global' && depth2 !== 'Global' && depth3 !== 'Global') {
				if (n.parentNode.tagName = "ul") {
					m = n.parentNode.parentNode;
					depth1 = m.parentNode.parentNode.children[0].textContent;
					depth2 = m.parentNode.children[0].textContent;
					depth3 = m.parentNode.parentNode.parentNode.children[0].textContent;
					console.log(depth1);
					console.log(depth2);
					console.log(depth3);

					if (depth1 !== 'Global' && depth2 !== 'Global' && depth3 !== 'Global') {
						res += m.parentNode.parentNode.children[0].textContent + ".";
						res.replace("Global.", "")
					}
				}
			}
			tier = n.parentNode.children[0].textContent;
			if (tier !== 'Global') {
				res += tier + ".";
			}
		}
		where = v.parentNode.parentNode.children[0].textContent;
		if (where !== 'Global') {
			res += where + "." + v.children[0].textContent;
		} else {
			res = v.children[0].textContent;
		}
	}
	return res
}

// console.log(ADOM);
// console.log(ADOM.app.name);
// console.log(ADOM.$.version);
