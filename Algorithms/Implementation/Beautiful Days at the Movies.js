function processData(input) {
    //Enter your code here
    let inputData = [];   
    let eachData = [];
    let charData = [];
    let reverseData = [];
    let n = 0;
    let cnt = 0;
    
    inputData = input.split(' ');
    n = parseInt(inputData[1]-inputData[0]+1);
    
    for (let i=0; i<n; i++) {        
        eachData = inputData[0]++ + "";  
        for (let j=0; j<eachData.length; j++) {
            charData[j] = eachData[j];
        }    
        
        charData.reverse();        
        for (let j=0; j<eachData.length; j++) {
            reverseData += charData[j];
        }        
        
        if (Number.isInteger(Math.abs(eachData - reverseData) / inputData[2]))
            cnt++;
        reverseData = [];            
    }    
    console.log(cnt);    

    /* Other algorithm */
    /* https://www.hackerrank.com/michaellazell */
    /*
    var arr = input.split(' ');
    var i = arr[0], j = arr[1], k = arr[2];
    
    var result = 0;

    while(i <= j) {        
        var rev = i.toString().split('').reverse().join('').toString();
        if(Math.abs(parseInt(i) - parseInt(rev)) % k == 0) {
            result++;
        }
        i++;
    }
    console.log(result);
    */
} 