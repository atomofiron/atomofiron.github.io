
var backLayer = get("back")
var frontLayer = get("front")
var nick = get("nick")
var steps = 10
var brightness = 50.0
var richness = 100

if (screen.height > screen.width)
	get("base").style.height = "70vh"

// Отрисовка зелёных листов
for (var i = 0; i < 6; i++) {
	var layer = create("div")
	layer.className = "layer"
	var k = i / steps
	var color = Math.round(brightness * k)
	var r = color
	var g = color + richness
	var b = color
	layer.style.backgroundColor = "rgb("+r+","+g+","+b+")"
	layer.style.transform = "rotate("+(360*k-36)+"deg)";
	backLayer.appendChild(layer)
	if (i == 1)
		layer.id = "buttons_layer"
}

// Отрисовка синих листов
for (var i = 0; i < 3; i++) {
	var layer_secondary = create("div")
	layer_secondary.className = "layer_secondary"
	var k = i/steps
	var color = Math.round(brightness * k)
	var r = color
	var g = color
	var b = color + richness
	layer_secondary.style.backgroundColor = "rgb("+r+","+g+","+b+")"
	layer_secondary.style.transform = "rotate("+(360*k+36)+"deg)"
	frontLayer.appendChild(layer_secondary)
}

// Отрисовка кнопок
var icons = ["android", "linux", "ubuntu", "js" ]
var box = create("div")
box.id = "top_buttons_box"
for (var i = 0; i < 4; i++)
	append(box, "<img class='top_button' src=svg/"+icons[i]+".svg />")
get("buttons_layer").appendChild(box)

// Отслеживание курсора мыши
function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove=mousemove;
}
function mousemove(event) {
    var x = y = 0;
    if (document.attachEvent != null) {
        x = window.event.clientX;
        y = window.event.clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }
    nick.style.marginLeft = (x-256)+px
}
init()

// Отображение никнеймов и пр.
var names = [ "@atomofiron", "/ra.slav", "atomofiron", "atomofiron@yandex.ru", "atomofiron", "atomofiron" ]
function showNickname(n) {
	nick.innerHTML = names[n]
	nick.style.opacity = 1
	nick.style.animation = "show 0.3s linear"
}
function hideNickname() {
	nick.style.opacity = 0
	nick.style.animation = "hide 0.3s linear"
}

function copyNick(n) {
	window.prompt("Скопировать: Ctrl+C, Enter", names[n]);
}

// Пасхалка про агента
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
var dignity = get("dignity")
var developer = "Android Разработчик"
var agent = "          Агент ЦРУ"
var abc = "Android Разработчик Агент ЦРУ"
var target
var proc = false
var f = [ 7,18,15,2,9,6,13,17,1,8,3,16,10,14,4,5,11,0,12 ]
function showAgent() {
	target = agent
	if (!proc) {
		proc = true
		animAgent()
	}
}
function hideAgent() {
	target = developer
	if (!proc) {
		proc = true
		animAgent()
	}
}
function animAgent(n=0) {
	var text = dignity.innerHTML
	if (text == target) {
		proc = false
		return
	}
	var pos = f[n%19]
	if (text[pos] != target[pos]) {
		var c
		var rnd = Math.random()
		if (rnd > Math.min(0.5, (100-n)/100))
			c = target[pos]
		else
			c = abc[Math.round(rnd * abc.length)];

		text = text.replaceAt(pos, c)
		dignity.innerHTML = text
	}

	setTimeout("animAgent("+(++n)+")", 20)
}

// Прячем знак авторского права
var wait = false
function onBodyScroll() {
	if (!wait) {
		setTimeout("hideAuthor()", 3000)
		wait = true
	}
}
function hideAuthor() {
	if (window.pageYOffset > 0) {
		window.scrollTo(window.pageXOffset, window.pageYOffset-window.pageYOffset/10)
		setTimeout("hideAuthor()", 30)
	} else
		wait = false
}
