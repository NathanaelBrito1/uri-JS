//1079 - Médias Ponderadas

var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let n = parseInt(input[0]) + 1 ;

for(let i = 1; i < n; i++){
 let [v1, v2, v3] = input[i].split(' ').map(v => parseFloat(v));
 let media_pond = (v1 * 2 + v2 * 3 + v3 * 5) / 10;
 console.log(media_pond.toFixed(1));
}