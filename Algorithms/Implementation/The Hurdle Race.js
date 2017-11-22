function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    height = readLine().split(' ');
    height = height.map(Number);
    
    // your code goes here    
    var maxHurdle = 0;
    
    maxHurdle = height.reduce((a, b) => Math.max(a, b));
    if (k < maxHurdle)
        console.log("" + (maxHurdle - k));
    else if (k >= maxHurdle)
        console.log(0);
}