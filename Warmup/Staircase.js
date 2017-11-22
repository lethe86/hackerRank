function main() {
    var n = parseInt(readLine());
    var line = "";    
 
    for (var i = 0; i < n; i++) {
        for (var j = n-i-1; j > 0; j--) {
            line += " ";
        }
        for ( var k = i+1; k > 0; k--) {
            line += "#";
        }
        process.stdout.write(line + "\n");
        line = "";
    }    
}