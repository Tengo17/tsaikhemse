let add_buttons = document.getElementsByClassName('click');
console.log(add_buttons);

// let src = document.
// getElementById('btn');

// scr.addEventListener('click', function()
// 	{ 
// 	alert();
// 	});	


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


