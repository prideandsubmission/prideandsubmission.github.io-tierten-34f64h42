
var pass = document.querySelector('input')

console.log(pass)

var first =0;


document.querySelector('.button').addEventListener('click', ask)



function ask(){
	

	if (pass.value.toLowerCase() === "ray"){
		document.querySelector('section').style.display="none"
		document.querySelector('main').style.display="block"
	}
	else{
		pass.value = "";
		document.querySelector('section h6').innerText= "Hint: It's end with letter y."
	}
}



