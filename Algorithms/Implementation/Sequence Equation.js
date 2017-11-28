process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var noe = 0;
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    input = input.split('\n');
    noe = parseInt(input[0]);
    input = input[1].split(' ');
    main();
});

function main() {
    let p = [];
    
    for (let i=1; i<=noe; i++)
        p[i] = input[i-1];
    
    for (let i=1; i<=noe; i++)
        console.log(p.findIndex((a) => a == (p.findIndex((a) => a == i))));
}