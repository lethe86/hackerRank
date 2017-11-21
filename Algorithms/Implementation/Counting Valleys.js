function processData(input) {
    //Enter your code here
    var valley = 0;
    var udCnt = 0;
    var inputArray = [];
    
    inputArray = input.split("\n"); 
    for (var i=0; i<parseInt(inputArray[0]); i++) {        
        if (inputArray[1][i] == "U")
            udCnt++;
        else
            udCnt--;
        
        // Check valley
        if ((udCnt == 0) && (inputArray[1][i] == "U"))
            valley++;     
    }
    console.log("" + valley);
} 