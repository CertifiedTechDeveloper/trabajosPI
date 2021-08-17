//Como hacer una torta//
let nombre = "lemon pie";
let ingrediente1= "huevos";
let ingrediente2="leche";
let ingrediente3="limon";
let ingrediente4="harina";
let cant_ingrediente1=2;
let cant_ingrediente2=500;
let cant_ingrediente3=3;
let cant_ingrediente4=500;
let temperatura = 180;

console.log (nombre, ingrediente1, ingrediente2, ingrediente3, ingrediente4, cant_ingrediente1, cant_ingrediente2, cant_ingrediente3, cant_ingrediente4, temperatura)
console.log (`Receta para hacer un ${nombre}, ingredientes ${cant_ingrediente1} ${ingrediente1}, ${cant_ingrediente2} ${ingrediente2}, ${cant_ingrediente3} ${ingrediente3}`)

//hacer un cafe//
let ingrediente5= "cafe";
let cant_tazas_cafe= 3
let temperatura2= 80;
let ingrediente6="agua";
let cant_agua= 600
let ingrediente7="azucar"
let cant_azucar=2;
let frio= false;

console.log(`Receta para hacer un ${ingrediente5}: para realizar ${cant_tazas_cafe} tazas de ${ingrediente5} se debe utilizar ${ingrediente5}, ${cant_agua}ml de ${ingrediente6} a ${temperatura2} de temperatura, ${cant_azucar} cucharadas de  ${ingrediente7}`)

//Ejercicio pantalones//
let cajon_pantalon="remera";
let cajon_remera="pantalon";

let cajon_auxiliar;
function intercambio() {

cajon_auxiliar= cajon_remera;
cajon_remera=cajon_pantalon;
cajon_pantalon = cajon_auxiliar;
}
intercambio()
console.log (`En el cajon de las remeras hay ${cajon_remera} y en el cajon de los pantalones hay ${cajon_pantalon}`)