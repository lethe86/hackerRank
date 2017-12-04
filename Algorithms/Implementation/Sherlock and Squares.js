function processData(input) {
    //Enter your code here
    var inputList = input.split('\n');    
        
    for (let i=1; i<=inputList[0]; i++) {
        inputList[i] = inputList[i].split(' ');
        console.log(
            Math.floor(Math.sqrt(parseInt(inputList[i][1])))
            - Math.ceil(Math.sqrt(parseInt(inputList[i][0])))
            + 1);
    }    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});