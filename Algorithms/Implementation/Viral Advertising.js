function processData(input) {
    //Enter your code here
    if (input == 1)
        return 2;
    
   return parseInt((processData(input - 1) * 3) / 2);  
   
   /* Other Solution */
   /*
   const likeFinder = (days, shares = 5, likes = 0) => days > 0 ? likeFinder(days-=1, Math.floor(shares/ 2) * 3, likes+= Math.floor(shares/ 2)) : likes;
   console.log(likeFinder(Number(input)));
   */
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    let sum = 0;
    for (let i=1; i<=_input; i++)
       sum += processData(i);
    console.log(sum);
});