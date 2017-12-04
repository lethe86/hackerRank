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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    arr.sort((a, b) => a - b);    
    var count = 1;
    console.log(n);
    arr.reduce(function(a, b) {
        if (a == b) {
            count++;
        } else if (a != b) {
            n -= count;
            if (n == 1)
                console.log('1');
            else 
                console.log(n);
            count = 1;
        }
        return b;
    }); 
}
