//1134 - Tipo de Combustível

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var i = parseInt(prompt (""));
var alcool = 0;
let gasolina= 0;
var diesel = 0;
while (i > 0) {
if(i == 1) {
alcool++;
i = parseInt (prompt (" ")) ;
} else if ( i == 2){
gasolina++;
i = parseInt (prompt ("")) ;
} else if(i == 3) {
diesel++;
i = parseInt (prompt (" ")) ;
} else if(i > 4) {
i = parseInt (prompt (" ")) ;
}else if(i == 4) {
break;
}
}
console.log ( "MUITO OBRIGADO");
console.log( "Alcool: " + alcool);
console.log( "Gasolina: " + gasolina); 
console.log( "Diesel: " + diesel);
