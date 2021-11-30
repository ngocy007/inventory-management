var overlay3 = document.getElementById("overlay3");
var add_invoice = document.getElementById("add_invoice");
var invoice_form = document.getElementById("invoice_form");
var invoice_form_no = document.getElementById("invoice_form_no");
var addsym = document.querySelector(".addsym");
var warp_items = document.querySelector(".warp-items");

addsym.onclick = function () {
  var items = document.createElement("div");
  items.className = "items";
  items.innerHTML = 
  '<div class="item"></div>\
  <div class="item">\
    <input type="text" name="" id="">\
  </div>\
  <div class="item">\
    <input type="number" value="1" name="" id="">\
  </div>\
  <div class="item">\
    <input type="number" value="" name="" id="">\
  </div>';
  addsym.before(items);
  warp_items.scrollTop = warp_items.scrollHeight;
};


add_invoice.onclick = function () {
  console.log("sss");
  overlay3.style.display = "block";
  invoice_form.style.display = "block";
};

invoice_form_no.onclick = function () {
  overlay3.style.display = "none";
  invoice_form.style.display = "none";
};
overlay3.onclick = function () {
  overlay3.style.display = "none";
  invoice_form.style.display = "none";
};