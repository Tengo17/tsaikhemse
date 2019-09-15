let add_buttons = 
document.getElementsByClassName('click');
console.log(add_buttons);

// added buttons
for (let i = 0; i < add_buttons.length;
	i++) {
	add_buttons[i].addEventListener('click',
		function(){
	this.classList.toggle('added');
	this.textContent = ' დამატებულია';
	if(this.classList.contains('added')){
		this.textContent = 'დამატებულია';
	} else {
		this.textContent = 'დამატება';
	}
})
}
// burger menu 
let	burger = document. getElementById('burger');
let menu = document.
getElementById('menu')
burger.addEventListener('click',function(){
	this.classList.toggle('active');
	menu.classList.toggle('open');
})

// scroll down

function jumpScroll() {
   	window.scroll(0,600);
 
}

