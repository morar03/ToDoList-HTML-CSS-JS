var input = document.getElementById("inputID");
var button = document.getElementById("buttonID");
var ul = document.querySelector("ul");


function addListAfterKeypress(event) {
	if (event.keyCode === 13) {
		addWork();
	}
}

function addWork(){
	if (input.value != "") {
		var div = document.createElement("div");
		div.classList.add('divElement');
		var li = document.createElement("li");
		var text = document.createTextNode(input.value);
		li.appendChild(text);
		ul.appendChild(div);
		div.appendChild(createButtonDelete());
		div.appendChild(li);
		input.value = "";
		Delete();
	}else {
		alert("You didn't write anything");
	}
}

function createButtonDelete(){
	var buttonDelete = document.createElement("button");
	buttonDelete.classList.add("deleteButton");
	buttonDelete.append(document.createTextNode("x"));
	return buttonDelete
}


function deleteNode(e){
	this.parentNode.remove();
}

function Delete(){
	var deleteButton = document.querySelectorAll("button");
	for (var i = 1; i< deleteButton.length; i++){
		deleteButton[i].addEventListener("click", deleteNode);
	}
}

function strike(e){
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

button.addEventListener('click', addWork);

ul.addEventListener('click', strike);

input.addEventListener("keypress", addListAfterKeypress);
