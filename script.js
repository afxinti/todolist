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

//create li element based on input and a delete button 
function createListElement(a) {
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn= document.createElement("button");
	btn.innerHTML = "delete";
	ul.appendChild(btn);
	shoppingItems = document.querySelectorAll('li');
	del = document.querySelectorAll('ul button');
	loopForNewList(a);
	
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
function loopForNewList(i) {
	// for (let i=0; i< shoppingItems.length; i++){
		shoppingItems[i].addEventListener('click',function(){
			shoppingItems[i].classList.toggle('done');
		});
		del[i].addEventListener('click',function(e){
			del[i].closest('li').remove();
		})
	// }
}