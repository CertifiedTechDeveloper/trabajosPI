//Nivel 1
function sumar (a,b){
    return a + b;
}
function restar (a,b) {
    return a-b;
}
function multiplicar (a,b) {
return a * b;
}

function dividir (a,b){
    return a / b;
}


//Nivel 2
console.log ('Testeo operaciones')
console.log (sumar (3,4));
console.log (restar (10,5));
console.log (multiplicar(3,4));
console.log (dividir (20,5));
console.log (dividir (3,0));

//Nivel 3
function cuadradoDeUnNumero (a) {
    return multiplicar (a,a);
}

function promedioDeTresNumero (a,b,c){
    let x = a + b
    return sumar (x,c) / 3
}

function calcularPorcentaje (a,b){
    return multiplicar (a,b) / 100;

}

function generadorDePorcentaje (a,b){
    return multiplicar (b,100) / a
}
console.log (cuadradoDeUnNumero (5));
console.log (promedioDeTresNumero (3,4,5));
console.log (calcularPorcentaje (50, 25));
console.log (generadorDePorcentaje (50,25))
