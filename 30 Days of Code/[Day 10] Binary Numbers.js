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
    let binaryNum = "";    
    let oldCnt = 0;
    let newCnt = 0;
    
    if (n == 0) {
        binaryNum = '0';
    } else if (n == 1) {
        binaryNum = '1';
    } else {
        while(n != 1) {        
            binaryNum += (n%2).toString();
            if ((n>>1) == 1) {
                binaryNum += '1';
                break;
            } else {
                n = n >> 1;
            }        
        }              
    }    
    binaryNum = binaryNum.split('').reverse();
    
    for (let i=0; i<binaryNum.length; i++) {
        if (binaryNum[i] == 1) {
            newCnt++;
        } else {
            newCnt = 0;  
        }   
        if (newCnt > oldCnt) {
            oldCnt = newCnt;
        }  
    }
    
    console.log(oldCnt);
}