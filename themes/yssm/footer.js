function killerrors() {
	return true; 
}
window.onerror = killerrors;

//back to top
var isie6 = window.XMLHttpRequest ? false : true; function newtoponload() { var c = document.getElementById("back-to-top"); function b() { var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; if (a > 0) { if (isie6) { c.style.display = "none"; clearTimeout(window.show); window.show = setTimeout(function () { var d = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; if (d > 0) { c.style.display = "block"; c.style.top = (500 + d) + "px" } }, 300) } else { c.style.display = "block" } } else { c.style.display = "none" } } if (isie6) { c.style.position = "absolute" } window.onscroll = b; b() } if (window.attachEvent) { window.attachEvent("onload", newtoponload) } else { window.addEventListener("load", newtoponload, false) } document.getElementById("back-to-top").onclick = function () { window.scrollTo(0, 0) };
//公用
document.body.oncopy = function () {
	setTimeout( function () {
		var text = clipboardData.getData("text");
		if (text) {
			text = text + "[摘自海岸线文学网："+location.href+"]";
			clipboardData.setData("text", text);
		}
		}, 100 )
}
}
document.writeln('<script src="http://www.baidu.com/js/opensug.js" charset="gbk"></script>');
document.writeln("<!-- Baidu Button BEGIN -->");
document.writeln("<script type=\"text/javascript\" id=\"bdshare_js\" data=\"type=tools&amp;uid=0\" ></script>");
document.writeln("<script type=\"text/javascript\" id=\"bdshell_js\"></script>");
document.writeln("<script type=\"text/javascript\">");
document.writeln("document.getElementById(\"bdshell_js\").src = \"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + Math.ceil(new Date()/3600000)");
document.writeln("</script>");
document.writeln("<!-- Baidu Button END -->");