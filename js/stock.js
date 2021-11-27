var overlay3 = document.getElementById("overlay3");
var delete_row = document.getElementById("delete-row");
var delete_btn = document.getElementById("table-delete-button");
var delete_no = document.getElementById("delete-no");
var delete_yes = document.getElementById("delete-yes");
var edit = document.getElementById("table-edit-button");
var table_edit = document.getElementById("edit-row");
var no_option = document.getElementById("delete-no-option");
var yes_option = document.getElementById("delete-yes-option");
var add_goods = document.getElementById("add_goods");
var additem = document.querySelector(".additem");
var addsym = document.querySelector(".addsym");
var warp_items = document.querySelector(".warp-items");
var additem_delete_no = document.getElementById("additem-delete-no");
var dele_bx;
addsym.onclick = function () {
  var items = document.createElement("div");
  items.className = "items";
  items.innerHTML =
    '<div class="item"></div>\
          <div class="item">\
            <input type="text" name="" id="">\
          </div>\
          <div class="item">\
            <input type="text" name="" id="">\
          </div>\
          <div class="item">\
            <input type="text" name="" id="">\
          </div>\
          <div class="item">\
            <input type="date" value="1111-11-11" name="" id="">\
            <i style="font-size:25px;" class="bx bx-trash">\
          </div>';
  addsym.before(items);
  warp_items.scrollTop = warp_items.scrollHeight;
  dele_bx = document.querySelectorAll(".additem .additem-body .items");
  console.log(dele_bx);
};


add_goods.onclick = function () {
  overlay3.style.display = "block";
  additem.style.display = "block";
};

delete_btn.onclick = function () {
  overlay3.style.display = "block";
  delete_row.style.display = "flex";
};
overlay3.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
  table_edit.style.display = "none";
  additem.style.display = "none";
};
delete_no.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
  console.log("123");
};
delete_yes.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
};
edit.onclick = function () {
  table_edit.style.display = "flex";
  overlay3.style.display = "block";
};

no_option.onclick = function () {
  overlay3.style.display = "none";
  table_edit.style.display = "none";
};
yes_option.onclick = function () {
  overlay3.style.display = "none";
  table_edit.style.display = "none";
};
additem_delete_no.onclick = function () {
  overlay3.style.display = "none";
  additem.style.display = "none";
};
