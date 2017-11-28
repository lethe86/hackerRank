function processData(input) {
    // Enter your code here
    let inputList = [];
    let oddList = [];
    let evenList = [];
    
    inputList = input.split("\n");
        
    for (let i=1; i<=inputList[0]; i++) {
        // Odd Loop
        for (let j=0; j<Math.ceil(inputList[i].length/2); j++) {
            oddList += inputList[i][0+2*j];
        }        
        // Even Loop
        for (let j=0; j<inputList[i].length>>1; j++) {
            evenList += inputList[i][1+2*j];
        }
        console.log(oddList + " " + evenList);
        oddList = evenList = [];
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