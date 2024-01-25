var ul = document.getElementById("list-container");
var input = document.getElementById("input");

//add
function add() {
  var lisitem = document.createElement("li");
  lisitem.innerHTML =
    input.value + "<button onclick='deleteitem(event)'>Delete</button>";
  ul.append(lisitem);
}

//deleteitem
function deleteitem(event) {
  event.target.parentElement.remove();
}
