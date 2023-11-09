//1133 - Resto da Divisão

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

if (x > y){
    for ( let i = y + 1; i < x; i++){
        if(i % 5 === 2 || i % 5 === 3){
            console.log(i);
        }
    }
} else if (x < y){
    for (var j = x + 1 ; j < y ;  j++){
        if(j % 5 === 2 || j%5 === 3){
            console.log(j);
        }
    }
}