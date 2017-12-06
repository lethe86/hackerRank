function processData(input) {
    //Enter your code here
    var inputList = input.split('\n');
    var noe = parseInt(inputList[0]);
    var arr = inputList[1].split(' ');
    var count = 1;
    var dupElements = [];
    
    arr = arr.map(Number);    
    arr.sort((a, b) => a - b);    
    arr.reduce(function(a, b) {
        if (a == b) {
            count++;
        } else {           
            dupElements[a] = count;
            count = 1;            
        }
        return b;
    });    
    dupElements.push(count);  
    
    if (dupElements.length == 1) {
        console.log('0');
    } else {
        dupElements.splice(dupElements.findIndex((a) => a==dupElements.reduce((a, b) => Math.max(a, b))), 1);        
        console.log(dupElements.reduce((a, b) => a + b));       
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