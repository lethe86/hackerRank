function aVeryBigSum(n, ar) {
    // Complete this function
    var sum = 0;
    
    for(var i = 0; i < n; i++) {
        sum += ar[i];
    }
    
    return sum;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = aVeryBigSum(n, ar);
    process.stdout.write("" + result + "\n");
}