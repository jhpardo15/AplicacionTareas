let edad;
let nombre;
do {
  edad = parseFloat(prompt("Ingrese su edad "));
} while (Number.isNaN(edad)||edad<0 );
do{nombre= prompt("Ingrese su nombre")}
while(nombre.length<=2)
 
if(edad<=12)console.log(`hola ${nombre}`)
else if(edad < 50){console.log(`Buenos Dias ${nombre}`)}
else console.log(`Buenos Dias Respetado ${nombre}`)


