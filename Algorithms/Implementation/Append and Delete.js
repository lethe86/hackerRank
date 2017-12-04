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

function main() {
    var s = readLine();
    var t = readLine();
    var k = parseInt(readLine());
        
    console.log(canconvert(s, t, k));
}

function canconvert (s, t, k) {
    if (s == t)
        return 'Yes';

    let sl = s.length, tl = t.length;

    if (sl + tl <= k)
        return 'Yes';

    let minl = Math.min(sl, tl),
        nsame = 0;

    for (let i = 0; i < minl; i++)
        if (s.charAt(i) == t.charAt(i))
            nsame++;
        else
            break;

    let nops = sl + tl - (nsame << 1);
    
    return nops > k || (k - nops) & 1 ? 'No' : 'Yes';
}
