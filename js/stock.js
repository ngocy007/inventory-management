var overlay3 = document.getElementById("overlay3");
var delete_row = document.getElementById("delete-row");
var delete_btns = document.querySelectorAll(".stoc_del");
var delete_no = document.getElementById("delete-no");
var delete_yes = document.getElementById("delete-yes");
var edits = document.querySelectorAll(".stoc_edit");
var table_edit = document.getElementById("edit-row");
var no_option = document.getElementById("delete-no-option");
var yes_option = document.getElementById("delete-yes-option");
var add_goods = document.getElementById("add_goods");
var additem = document.querySelector(".additem");
var addsym = document.querySelector(".addsym");
var warp_items = document.querySelector(".warp-items");
var additem_delete_no = document.getElementById("additem-delete-no");

var dele_items;

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
            <i style="font-size:25px;" class="bx bx-trash dele_item">\
          </div>';
  addsym.before(items);
  warp_items.scrollTop = warp_items.scrollHeight;
  dele_items = document.querySelectorAll(".dele_item");
  for (let i in dele_items) {
    dele_items[i].onclick = () => {
      let parent = dele_items[i].parentElement.parentElement;
      parent.remove();
    };
  }
};

add_goods.onclick = function () {
  overlay3.style.display = "block";
  additem.style.display = "block";
};

for (let i in delete_btns) {
  delete_btns[i].onclick = function () {
    overlay3.style.display = "block";
    delete_row.style.display = "flex";
  };
}
overlay3.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
  table_edit.style.display = "none";
  additem.style.display = "none";
};
delete_no.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
};
delete_yes.onclick = function () {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
};

for (let item in edits) {
  edits[item].onclick = function () {
    table_edit.style.display = "flex";
    overlay3.style.display = "block";
  };
}

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
