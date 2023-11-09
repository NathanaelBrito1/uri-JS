//1154 - Idades

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = 0;
var z = 0;

while(true){
  if(x < 0){
    break;
  }
  y += x;
  z++;
  x = parseInt(lines.shift());
}

console.log(`${(y / z).toFixed(2)}`);