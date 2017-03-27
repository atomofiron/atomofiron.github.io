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

var body = document.getElementsByTagName("body")[0]
var mobile = (window.innerWidth < window.innerHeight || get("head_title").offsetLeft < -10)

get(mobile ? "mobile" : "desktop").style.display = "block"
body.removeChild(get(!mobile ? "mobile" : "desktop"))

var script = create('script')
script.setAttribute("type","text/javascript")
script.setAttribute("src", mobile ? "js/mobile.js" : "js/desktop.js")
body.appendChild(script)
