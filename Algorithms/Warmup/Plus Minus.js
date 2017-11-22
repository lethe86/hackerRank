function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var zero_cnt = 0;
    var pos_cnt = 0;
    
    for(var i = 0; i < n; i++) {
        if(arr[i] == 0)
            zero_cnt++;
        else if(arr[i] > 0)
            pos_cnt++;
    }
    
    process.stdout.write("" + (pos_cnt / n).toFixed(6) + "\n");
    process.stdout.write("" + ((n - pos_cnt - zero_cnt) / n).toFixed(6) + "\n");
    process.stdout.write("" + (zero_cnt / n).toFixed(6) + "\n");
}