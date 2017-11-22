function timeConversion(s) {
    // Complete this function
    var cv = "";
    
    if (s[8] == 'P') {     
        if(s[0] == '1' && s[1] == '2') {
            cv += s[0];
            cv += s[1];
        } else {
            cv += (parseInt(s[0]) + 1);
            cv += (parseInt(s[1]) + 2);            
        }        
    } else {
        if(s[0] == '1' && s[1] == '2') {
            cv += '0';
            cv += '0';
        } else {
            cv += s[0];
            cv += s[1];            
        }
    } 
    
    for(var i = 2; i < s.length-2; i++) {
        cv += s[i];
    }
    
    return cv;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    
    process.stdout.write("" + result + "\n");
}