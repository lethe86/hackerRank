function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var sum_l = 0;
    var sum_r = 0;
    
    for(var i = 0; i < n; i++) {
        sum_l += a[i][i];
        sum_r += a[i][n-i-1];
    }
        
    process.stdout.write("" + Math.abs(sum_l - sum_r));
}