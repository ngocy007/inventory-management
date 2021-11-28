var add_sup = document.getElementById("add_sup");
var add_employ = document.getElementById("add_employ");
var additem = document.querySelector(".additem");
var overlay3 = document.querySelector(".overlay3");
var add_delete_no = document.querySelector("#additem-delete-no");

var edit_buttons = document.querySelectorAll(".edit_button");
var del_buttons = document.querySelectorAll(".del_button");
var edit_row = document.querySelector(".edit-row");
var additem_delete_no = document.querySelector("#delete-no-option");
var delete_row = document.querySelector(".delete-row");
var delete_no = document.querySelector("#delete-no");

for (let i in edit_buttons) {
  edit_buttons[i].onclick = () => {
    edit_row.style.display = "grid";
    overlay3.style.display = "block";
  };
}
for (let i in del_buttons) {
  del_buttons[i].onclick = () => {
    delete_row.style.display = "flex";
    overlay3.style.display = "block";
  };
}
add_sup.onclick = () => {
  additem.style.display = "block";
  overlay3.style.display = "block";
};
overlay3.onclick = () => {
  additem.style.display = "none";
  overlay3.style.display = "none";
  edit_row.style.display = "none";
  delete_row.style.display = "none";
};
add_delete_no.onclick = () => {
  additem.style.display = "none";
  overlay3.style.display = "none";
};
additem_delete_no.onclick = () => {
  overlay3.style.display = "none";
  edit_row.style.display = "none";
};
delete_no.onclick = () => {
  overlay3.style.display = "none";
  delete_row.style.display = "none";
};
