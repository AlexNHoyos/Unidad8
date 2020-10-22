var form = document.querySelector("form");
var user = document.getElementById("user");
var pass = document.getElementById("pass");
var submit = document.getElementById("ingresar");

form.onsubmit = function(e) {
 	if (user.value === '' || pass.value === '') {
 		e.preventDefault();
 			window.alert('Completá ambos datos!');
 } 
 else 
 {
 	if (user.value.includes('@')) {window.alert('Acceso exitoso')}
 		else{window.alert('Falta arroba en usuario')}
 }
}
