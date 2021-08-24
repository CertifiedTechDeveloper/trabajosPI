/*console.log (!true);
console.log (!false);
console.log (!!true);
console.log (!!false);
console.log (!1);
console.log (!!1);
console.log (!0);
console.log (!!0);
console.log (!!"");
let x=5;
let y =9;
console.log (x < 10 && x !== 5);
console.log (x> 9 || x ===5);
console.log (!(x===y))*/
 
function puedeSubir (edad, altura){
    return edad > 12 && altura > 1.3
}
let edad =5;
let  altura = 1.5
//  console.log (puedeSubir())

 function DebeUsarFlash (luz, velocidad) {
     return !luz || velocidad;
 }
 let hayLuz = true
 let velocidad = false
 console.log (DebeUsarFlash (3, 5))

function pasarDeNivel (notaPacial1, notaParcial2, notaFinal){
     return (notaPacial1 > 7 && notaParcial2 > 7) || notaFinal ==4;
 }
 let notaPacial1 = 10;
 let notaParcial2 = 5;
 let notaFinal = 5;
 console.log (pasarDeNivel (notaPacial1, notaParcial2, notaFinal))
 

 function puedeVerTv (realizoTarea, tocoElPiano, TocoPianoMemoria) {
     return realizoTarea && tocoElPiano && TocoPianoMemoria;
 }

 let juanrealizoTarea = true;
 let juantocoElPiano = true;
 let juanTocoPianoMemoria = false;
 console.log (puedeVerTv (juanrealizoTarea, juantocoElPiano, juanTocoPianoMemoria))