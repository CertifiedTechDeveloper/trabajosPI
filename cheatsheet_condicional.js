//Condicional. Else if pueden ser varios, else solo uno
let maniana = 'martes'
if (maniana == 'sabado', maniana == 'domingo') {
    console.log ("es fin de semana")}
    else if (maniana == 'lunes'){ 
console.log ("debo trabajar")
    }
           else {
            console.log ("no es fin de semana")}
//IF TERNARIO. Linea de codigo resumida para hacer evaluaciones
let fruta = 'naranja'
let resultado = fruta == 'manzana' ? 'buenisimo, me gustan las manzanas': 'ufa, queria manzana';
console.log (resultado)

//SWITCH, siempre y cuando quieras evaluar si una expresion es exactamente igual a un valor esperado
let semaforo = 'verde'
switch (semaforo){
    case 'verde' : console.log ('puedo cruzar');
    break;
    case 'amarillo' : console.log ('precuacion');
    break;
    case 'rojo' : console.log ('no cruces, hayq eu esperar');
    break;
    default :
    console.log ('No funciona el semaforo');
    break;
}