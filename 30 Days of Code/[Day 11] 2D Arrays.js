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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let sumList = [];
    let sum = 0;
    let k = 0;
    
    for (let i=1; i<=4; i++) {
        for (let j=1; j<=4; j++) {
            sum += (arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]);
            sum += (arr[i][j]);
            sum += (arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]);
            sumList[k] = sum;
            sum = 0;
            k++;
        }    
    }            
    console.log(sumList.reduce((a, b) => Math.max(a, b)));
}