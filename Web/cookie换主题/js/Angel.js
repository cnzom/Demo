//蓝色主题
function blue() {
	document.getElementById('thecol').href = "css/style-blue.css";
	document.cookie = "theme=blue";
}
//橙色主题
function orange() {
	document.getElementById('thecol').href = "css/style-orange.css";
	document.cookie = "theme=orange";
}
//绿色主题
function green() {
	document.getElementById('thecol').href = "css/style-green.css";
	document.cookie = "theme=green";
}
//红色主题
function red() {
	document.getElementById('thecol').href = "css/style-red.css";
	document.cookie = "theme=red";
}


//读取cookie设置主题
function myTheme() {
	var my_Theme = document.cookie;
	if (my_Theme == "theme=blue") {
		blue()
	} else if (my_Theme == "theme=orange") {
		orange()
	} else if (my_Theme == "theme=green") {
		green()
	} else if (my_Theme == "theme=red") {
		red()
	};
}