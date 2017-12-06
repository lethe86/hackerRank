process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function findA(s, rmd) {
    let count = 0;
    
    for (let i=0; i<rmd; i++) {
        if (s[i] === 'a')
            count++;
    }
    
    return count;
}

function main() {
    var s = readLine();
    var n = parseInt(readLine());    
    var quotient = Math.floor(n/s.length);
    var remainder = n%s.length;
    var aIns = findA(s, s.length);
    
    console.log((aIns * quotient) + findA(s, remainder));
}
