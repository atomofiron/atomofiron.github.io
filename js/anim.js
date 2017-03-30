
function showContent() {
	if (avaLoaded && pageReady)
		forEach(gets("showable"), function(item, i, arr) {
			item.style.opacity = 1
		})
}

var avaLoaded = false
var pageReady = false
var img = new Image()
img.src = "ava.jpg"
img.onload = function() {
	avaLoaded = true
	showContent()
}
