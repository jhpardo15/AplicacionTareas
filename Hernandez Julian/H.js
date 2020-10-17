boton = document.querySelector("#boton1");
boton2 = document.querySelector("#boton2");
boton3= document.querySelector("#boton3");
const i = document.querySelector("img")
const a = document.querySelector("p");
function ocultarparrafo(){
a.style.display="none";
}
function mostrarparrafo(){
  a.style.display="block"
}
function aumentarimagen(){
  i.style.padding= "20px"
}

function cambiarcolor() {
  a.style.backgroundColor = "blue";
  
}
// Al hacer click sobre el boton queremos que se ejecute la funcion cambiarcolor
boton.onclick = cambiarcolor;
boton2.onclick= ocultarparrafo;
boton3.onclick = mostrarparrafo;
i.onmouseover = aumentarimagen;
