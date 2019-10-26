var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  listItems.push = input.value;
  var x = getListLength();
  addRemoveButton(x);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addRemoveButton(n) {
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  listItems[n].appendChild(button);
  button.addEventListener("click", function() {
    button.parentNode.remove();
  });
}

ul.addEventListener("click", function(event) {
  var target = event.target;
  target.classList.toggle("done");
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function getListLength() {
  return listItems.length - 1;
}
for (i = 0; i <= getListLength(); i++) {
  addRemoveButton(i);
}
