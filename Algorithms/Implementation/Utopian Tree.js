function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());        
        var h = 1;
        if (n == 0) {
            console.log('1');
        } else if ( n == 1) {
            console.log('2');
        } else if (n%2 == 0) {
            for (var i=0; i<n/2; i++)
                h = (h * 2) + 1;
            console.log("" + h);
        } else {
            h = 2;
            for (var i=0; i<parseInt(n/2); i++)
                h = (h + 1) * 2;
            console.log("" + h);
        }            
    }    
}