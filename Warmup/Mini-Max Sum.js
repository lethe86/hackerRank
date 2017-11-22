function main() {    
    arr = readLine().split(' ');
    arr = arr.map(Number);
        
    var min = arr[0]
    var max = arr[0];
    var sum = 0;
    var i = 0;
    
    while(arr[i++] != null) {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];
        sum += arr[i-1];
    }
    
    process.stdout.write("" + (sum - max) + " " + (sum - min));    
}