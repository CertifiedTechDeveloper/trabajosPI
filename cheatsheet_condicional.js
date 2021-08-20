let maniana = 'lunes'
if (maniana == 'sabado', maniana == 'domingo') {
    console.log ("es fin de semana")}
           else {
            console.log ("no es fin de semana")}
//IF TERNARIO
let fruta = 'manzana'
let resultado = fruta == 'manzana' ? 'buenisimo, me gustan las manzanas': 'ufa, queria manzana';
console.log (resultado)

//SWITCH
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