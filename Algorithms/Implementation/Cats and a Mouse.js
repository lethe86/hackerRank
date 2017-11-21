function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        
        if (Math.abs(z-x) > Math.abs(z-y))
            console.log("Cat B");
        else if (Math.abs(z-x) == Math.abs(z-y))
            console.log("Mouse C");
        else
            console.log("Cat A");
    }
}