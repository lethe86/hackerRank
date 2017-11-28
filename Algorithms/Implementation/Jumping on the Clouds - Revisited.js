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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    
    let jumpCnt = n/k;
    let e = 100;
    let index = k;
    while (jumpCnt-->0) {
        if (c[index] == 0) {
            e -= 1;
        } else if (index == n) {
            if (c[0] == 0)
                e -= 1;
            else
                e -= 3;
        } else {
            e -= 3;
        }
        index += k;
    }    
    console.log(e);
}