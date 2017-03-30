var px = "px"
var inh = "in"
var clog = console.log

function create(tag) {
	return document.createElement(tag)
}
function get(id) {
	return document.getElementById(id)
}
function gets(cls) {
	return document.getElementsByClassName(cls)
}
function append(obj, string) {
	obj.insertAdjacentHTML("beforeend", string)
}
function getPX(value) {
	return (value.replace(px, ""))*1
}
function forEach(arr, callback) {
	for (var i = 0; i < arr.length; i++)
		callback(arr[i], i, arr)
}
function getScreenDiagonal() {
	var cm = get("meter").clientHeight
	var dpi = Math.sqrt(2 * cm * cm) / Math.sqrt(128) * 2.51
	return Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) / dpi
}

var body = document.getElementsByTagName("body")[0]
var phone = getScreenDiagonal() < 7
var land = window.innerHeight < window.innerWidth * 0.8
var mobile = phone || get("head_title").offsetLeft < -10

get(mobile ? "mobile" : "desktop").style.visibility = "visible"
get(!mobile ? "mobile" : "desktop").style.display = "none"
body.removeChild(get(!mobile ? "mobile" : "desktop"))

var script = create('script')
script.setAttribute("type","text/javascript")
script.setAttribute("src", mobile ? "js/mobile.js" : "js/desktop.js")
body.appendChild(script)
