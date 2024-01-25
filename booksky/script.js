//Selecting popup-box,pop-upoverlay,button

var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopuputton = document.getElementById("add-popup-button");

addpopuputton.addEventListener("click", function () {
  popupbox.style.display = "block";
  popupoverlay.style.display = "block";
});

//selecting cancel button

var cancelpopupbutton = document.getElementById("cancel-popup");

cancelpopupbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

//select container,addbutton,book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container");
var addbookbutton = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbookbutton.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h1>${booktitleinput.value}</h1>
  <h5>${bookauthorinput.value}</h5>
  <p>${bookdescriptioninput.value}</p>
  <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
