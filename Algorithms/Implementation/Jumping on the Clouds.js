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

function findPosition(cp, c, n) {
    if (cp+1 == n) {
        return 1;
    } else if (cp+2 == n) {
        return 2;
    } else {        
        if ((c[cp+1]==1) && (c[cp+2]==1))
            return 0;
        else if (c[cp+2]==0)
            return 2;
        else
            return 1;
    }
}

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);    
    
    /*
        1. find position to jump
        2. jump
        3. repeat
        4. return 0 in findPostiion --> Never happend...
    */
    var cp = 0;
    var count = 0;
    
    while(cp != (n-1)) {
        cp += findPosition(cp, c, n-1);        
        count++;
    }
    console.log(count);
}
