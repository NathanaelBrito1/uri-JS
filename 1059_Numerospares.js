//1059 - Números Pares
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

  var num = 0;

    while (num <= 99){
        num += 2;
        console.log(num);
    }
