/* Funciones: Es un bloque de código que nos permite agrupar una funcionalidad para usarla todas las veces que necesitemos.
 Normalmente realiza una tarea especifica y retorna un valor como resultado. Entre las llaves de la función se escribe el cuerpo
 Parametros: variables que escribimos cuando definimos la funcion
 Argumentos: valores que enviamos cuando invocamos la funcion*/

/*Funciones expresadas: se asignan como valor de una variable, la funcion en si no tiene nombre
 (siempre el console.log debe estar despues de declarar la variable)*/
let chau = function (){
    return 'chau';
}
console.log (chau ());

/*Funciones declaradas o nombradas. Usan la estructura basica*/

function saludar( nombre , apellido) {
    return 'hola' + ' '+ nombre + ' ' + apellido;
}
console.log (saludar ("Ana", "Torlaschi"));

/*Invocarla: a traves del nombre de la funcion con parentesis. Argumentos*/
 saludar (); // solo la va a ejecutar pero no la va a mostrar en la terminal, para eso hay que hacer un console.log

 /*Scope local o global dependiendo si declaramos la variable dentro o fuera de la funcion, 
 y de ahi de donde la podemos invocar si desde adentro o desde afuera de la funcion
 Una variable con scope local tiene predominancia por sobre una de un valor global*/
 /*Scope local: no se puede usar la variable fuera de la funcion*/

function hola (){
    let saludo = 'hola, que tal';
    return saludo;
       }
   console.log (saludo); //muestra error ya que la variable no existe fuera de la funcion
   console.log (hola); // muestra que tiene que decir la fc hola: Hola, que tal
   
   /*Scope global: la variable sirve para cualquier funcion*/
   let saludo = 'hola, que tal';
   function hola (){
        return saludo;
       }
   console.log (saludo); 

 