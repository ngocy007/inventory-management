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
    <input type="text" name="" id="">\
  </div>\
  <div class="item">\
    <input type="number" name="" id="">\
  </div>';
  addsym.before(items);
  warp_items.scrollTop = warp_items.scrollHeight;
};