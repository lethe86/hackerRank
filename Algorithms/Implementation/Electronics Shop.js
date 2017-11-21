function getMoneySpent(keyboards, drives, s){
    // Complete this function    
    var combList = [];
    var k = 0;
    
    for (var i=0; i<keyboards.length; i++) {
        for (var j=0; j<drives.length; j++) {
            combList[k++] = (keyboards[i] + drives[j]);            
        }
    }
    
    combList.sort((a, b) => a - b);
    
    while(1) {
        if (combList[combList.length-1] <= s) {
            return combList[combList.length-1];
        } else if (combList[combList.length-1] > s && combList.length == 1) {
            return -1;
        } else {
            combList.pop();
        }
    }    
}