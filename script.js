'use strict'

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let shoppingItems = document.querySelectorAll('li');
let del = document.querySelectorAll('ul button');


//on list items on click change state (done/not done)
for (let i=0; i< shoppingItems.length; i++){
	shoppingItems[i].addEventListener('click',function(){
		shoppingItems[i].classList.toggle('done');
	});
	del[i].addEventListener('click',function(){
		del[i].parentElement.remove();
	})
}

//return the length of the input
function inputLength() {
	return input.value.length;
}

//create div to enclose: li element based on input and delete button 
function createListElement(a) {
	var div = document.createElement('div');
	var li= document.createElement("li");
	var btn= document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	div.classList.add('wrapper');
	ul.appendChild(div);
	div.append(li, btn);  // append not appendChild:  https://dev.to/ibn_abubakre/append-vs-appendchild-a4m 
	input.value = "";
	btn.innerHTML = "delete";
	shoppingItems = document.querySelectorAll('li');
	del = document.querySelectorAll('ul button');
	loopForNewList();
	
}
//on click create an element on the list with argument a created variable for the two matrix (shoppinglist and del)
function addListAfterClick() {
	let indexnumber = 0;
	if (inputLength() > 0) {
		indexnumber = del.length;
		createListElement(indexnumber);
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//on list items on click change state (done/not done)
function loopForNewList() {
	for (let i=0; i< shoppingItems.length; i++){
		shoppingItems[i].addEventListener('click',function(){
			shoppingItems[i].classList.toggle('done');
		});
		del[i].addEventListener('click',function(){
			del[i].parentElement.remove();
		})
	}
}