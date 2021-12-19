var Cmenu = document.getElementById("click-menu");
var menuCl = document.getElementById("menu-cl");
var change_color = document.querySelector(".change-color");
var quit_menu = document.getElementById("quit-menu");

menuCl.onclick = function () {
  change_color.style.display = "flex";
};
quit_menu.onclick = function () {
  change_color.style.display = "none";
};
Cmenu.onclick = function () {
  var r = document.querySelector(":root");
  var mainColor = document.getElementById("main-color");
  var secondaryColor = document.getElementById("second-color");
  var narColor = document.getElementById("nar-color");
  var bg_content_page = document.getElementById("bg-content-page");

  r.style.setProperty("--main-color", mainColor.value);
  r.style.setProperty("--secondary-color", secondaryColor.value);
  r.style.setProperty("--main-color-2", narColor.value);
  r.style.setProperty("--bg-content-page", bg_content_page.value);

  console.log(bg_content_page.value);
};
