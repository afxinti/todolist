let button = document.getElementById("enter");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let shoppingItems = document.querySelectorAll('li');


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
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

//on list items on click change state (done/not done)
for (let i=0; i< shoppingItems.length; i++){
	shoppingItems[i].addEventListener('click',function(){
		shoppingItems[i].classList.toggle('done');
	});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);