let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchbtn = document.querySelector(".bx-search");
let notifying = document.querySelector(".menu-link-notify");
var overlay = document.getElementById("ov");
var overlay2 = document.getElementById("ov2");
var sb = document.getElementById("sb");
let btns = document.querySelector("#btns");

// sử lý menu
let iconNoti = document.querySelector(".notify");
let menuNoti = document.querySelector(".notify-menu");
let homecontent = document.getElementById("home_content");

var ktrep = 0;
var body = document.body;
let width = body.clientWidth;

/// hàm chuyển động cho pc
btn.onclick = function () {
  sidebar.classList.toggle("active");
  console.log("asssss");
};
searchbtn.onclick = function () {
  sidebar.classList.toggle("active");
};
notifying.onclick = function () {
  sidebar.classList.toggle("active");
};
iconNoti.onclick = function () {
  menuNoti.classList.toggle("active");
  overlay2.style.display = "block";
  homecontent.style.zIndex = "unset";
};
overlay2.onclick = function () {
  if (menuNoti.classList.value != "notify-menu") {
    menuNoti.classList.remove("active");
  }
  overlay2.style.display = "none";
  homecontent.style.zIndex = "-99";
};

///////////////////////////////////////////////////

// hàm chuyển động cho mobi
notifying.onclick = function () {
  overlay.style.display = "block";
  sb.style.transform = "translateX(0%)";
  console.log("aa");
};

overlay.onclick = function () {
  overlay.style.display = "none";
  sb.style.transform = "translateX(-100%)";
};

btns.onclick = function () {
  overlay.style.display = "none";
  sb.style.transform = "translateX(-100%)";
};

/// cho cho cả 2
var mql = window.matchMedia("(min-width: 975px)");
mql.onchange = (e) => {
  console.log(mql);
  test = sidebar.classList.value;
  if (e.matches) {
    if (test === "sidebar") {
      sidebar.classList.add("active");
    }

    sb.style.transform = "translateX(0%)";
  } else {
    if (test === "sidebar") {
      sidebar.classList.add("active");
    }
    sb.style.transform = "translateX(-100%)";
  }
};
