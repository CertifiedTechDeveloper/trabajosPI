//OPERADOES

// ASIGNACION =

let nombre = 40

//ARITMETICOS
10 + 5 //Suma
10 - 5 //Resta
10 * 5 //Multiplicacion
10 / 5 //division
10 % 5 //Modulo: da el resto de dividir 10/5=0
10 ++ //Incremento. Nos suma una unidad
10 -- //Decremento. Nos resta una unidad

//COMPARACION SIMPLE

5 == 5 //Comparacion simple, solo compara cantidades, daria verdadero

//Cuando se comparan strings, el == compara valor y <= compara por orden alfabético. Ejemplo: console.log("a" < "bbbbb"); //true//

//Desigualdad simple

6 != 6 //compara solo cantidades daria falso



//COMPARACION ESTRICTA
5 === '5'//Compara cantidades y tipo de variable, daria falso

/

//Desigualdad estricta 
 6 !== '6' //Compara cantidades y tipo de variables daria verdadero


//OPERADORES RELACIONALES 
5 > 4 //Mayor
5 > = 4 //Mayor o igual
5 < 4 //Menor
5 < = 4 // Menor o igual


//OPERADORES LOGICOS

//AND &&

true && true // siempre true cuando todas las sentencias son verdaderas
//En el caso de los strings y el operador &&, al ser ambos strings verdaderos (ya que tienen una cadena de caracteres), la respuesta es el último string de la sentencia.

//OR ||

true || false // es verdadero con que una sentencia sea verdadera

//En los casos de string y el operador ||  —al tener que cumplirse solo una condición—, como ambos son true, la respuesta es la primera sentencia true encontrada.

//CONCATENACIONES +
 
let nombre = 'Ana'
let apellido = 'Torlaschi'

console.log (nombre + ' ' + apellido)  // en consola muestra Ana Torlaschi

// TRULHY O FALSY

// SIEMPRE FALSY

 false
 0 (cero)
 “” (string vacío)
 null
 undefined
 NaN (Not a Number. Ejemplo: el resultado de 1 dividido por 0)
 
 //TODO LO DEMAS ES TRULHY. Eso incluye:

 ‘0’ (una cadena que contenga un simple 0)
 ‘false’ (un string que contenga el texto “false”)
 [] (un arreglo vacío)*
 {} (un objeto vacío)*
 function(){} (una función vacía)

 // LAS REGLAS SON:

False, cero y cadenas vacías son todas equivalentes.
Null y undefined son equivalentes a ellos mismos y entre ellos, pero nada más.
NaN no es equivalente a nada, incluido otro NaN.