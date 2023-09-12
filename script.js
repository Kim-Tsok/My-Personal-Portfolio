const menuButton = document.getElementById("menuButton");
const menuBar = document.getElementById("navbar");
menuButton.onclick = () => {
	menuBar.style.display = "flex";
	menuBar.style.transform = "translateX(0px)";
	menuBar.style.pointerEvents = "auto";
	menuBar.style.opacity = "1";
	document.getElementById("menuButton").style.display = "none";
	document.getElementById("closeMenu").style.display = "flex";
};

document.getElementById("closeMenu").onclick = () => {
	menuBar.style.transform = "translateX(50px)";
	menuBar.style.pointerEvents = "none";
	menuBar.style.opacity = "0";
	document.getElementById("menuButton").style.display = "flex";
	document.getElementById("closeMenu").style.display = "none";
};

document.getElementById("GIT").onmouseenter = () => {
	document.getElementById("GITarrow").style.rotate = "30deg";
	document.getElementById("GITtext").style.marginRight = "6px";
};
document.getElementById("GIT").onmouseleave = () => {
	document.getElementById("GITarrow").style.rotate = "-1deg";
	document.getElementById("GITtext").style.marginRight = "0";
};
document.getElementById("CV").onmouseenter = () => {
	document.getElementById("CVarrow").style.rotate = "30deg";
	document.getElementById("CVtext").style.marginRight = "3px";
};
document.getElementById("CV").onmouseleave = () => {
	document.getElementById("CVarrow").style.rotate = "-1deg";
	document.getElementById("CVtext").style.marginRight = "0";
};
