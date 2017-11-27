process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function saveThePrisoner(n, m, s){
    // Complete this function
    /*
    if (m > n) {  
        if (m%n == 0 && s == 1)
            return n;
        if ((s+m%n-1) > n) {
            if ((s+m%n-n) == 1)
                return 1;
            return s+m%n-n-1;
        } else {
            if ((s+m%n) == 1)
                return 1;
            return s+m%n-1;
        }
    } else if (m == n) {
        if (m%n == 0 && s == 1)
            return n;
        if (s > 1)
            return s-1;
        else
            return n;
    } else {
        if ((m+s-1) > n)
            return m+s-n-1;
        else
            return m+s-1;
    }
    */
    return (m+s-2)%n+1;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write(""+result+"\n");
    }

}