console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#cat')

const imgClicked = () => {
	alert("You're wonderful!")
}

img.addEventListener('mouseover', imgClicked)