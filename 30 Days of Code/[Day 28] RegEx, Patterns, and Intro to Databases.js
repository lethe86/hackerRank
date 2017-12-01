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
    var N = parseInt(readLine());
    var regName = /[a-z]/;    
    var regEmail = /[a-z]+@+gmail.com/;
    var checkedList = [];
    var i = 0;
    
    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        
        // Check Regular Expression
        if (regName.test(firstName) && regEmail.test(emailID) 
            && firstName.length<20 && emailID.length<50)
            checkedList[i++] = firstName;
    }
    
    // Sorting & Print
    checkedList.sort().find((a) => console.log(a));
}