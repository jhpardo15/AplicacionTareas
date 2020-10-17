boton = document.querySelector("#boton1");
parraf = document.querySelector("#miParrafo");
function cambiarcolor() {
  parraf.style.backgroundColor = "red";
  alert("Color cambiado");
}
// Al hacer click sobre el boton queremos que se ejecute la funcion cambiarcolor
boton.onclick = cambiarcolor;

encabezado = document.querySelector("h1");
console.log(encabezado);
texto = prompt("Ingrese el texto que quiere en el encabezado");
// innerHTML es el texto que esta dentro del elemento
encabezado.innerHTML = texto;

// backgroundColor corresponde al color del fondo
color = prompt("Ingrese el color deseado");
encabezado.style.backgroundColor = color;
body = document.querySelector("body");
body.style.backgroundColor = color;