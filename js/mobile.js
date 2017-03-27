
function onBodyScroll() {}

function getSize(percent) {
	return window.innerWidth * percent / 100
}

function forEach(arr, callback) {
	for (var i = 0; i < arr.length; i++)
		callback(arr[i], i, arr)
}

var icons = gets("icon_link")

var size = getSize(10) + px
forEach(icons, function(item, i, arr) {
	item.style.width = size
	item.style.height = size
})

function resizeIcons() {
	forEach(icons, function(item, i, arr) {
		item.style.padding = "5%"
	})
}
