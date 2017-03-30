
function onBodyScroll() {}

function getSize(percent) {
	var size = land ? window.innerHeight : window.innerWidth
	return size * percent / 100
}

get("ava").style.width = "50%"

var icons = gets("icon_link")
var port = true

function updateIconsSize() {
	var size = Math.floor(getSize(10)) + px
	forEach(icons, function(item, i, arr) {
		item.style.width = size
		item.style.height = size
	})
}

function updateOrientation() {
	land = window.innerHeight < window.innerWidth * 0.8
	if (land == port) {
		var portBox = get("port")
		var landBox = get("land")
		var links = get("links")

		if (land) {
			portBox.removeChild(links)
			landBox.appendChild(links)
			landBox.style.width = "50%"

			get("name").style.fontSize = "24pt"
			get("dignity").style.fontSize = "16pt"
		} else {
			landBox.removeChild(links)
			portBox.appendChild(links)
			landBox.style.width = "0%"

			get("name").style.fontSize = "48pt"
			get("dignity").style.fontSize = "32pt"
		}
	}
	port = !land
	updateIconsSize()
}
window.onresize = updateOrientation
updateOrientation()

pageReady = true
showContent()
