function sockMerchant(n, ar) {
    // Complete this function
    /*
    var cnt = 0;
    var shift_flag = 0;
    
    while (ar.length != 1) {
        if ( ar.length == 2 && ar[0] == ar[1]) {
            cnt++;
            break;
        }
        for (var i=1; i<n-1; i++) {
            if (ar[0] == ar[i]) {                
                cnt++;                
                ar.splice(i, 1);
                ar.shift();    
                shift_flag++;
                break;
            } 
        }
        if (shift_flag == 0)
            ar.shift();
        shift_flag = 0;
    }
    
    return cnt;
    */
    int[] pairsToSell = new int[n];
        int countToSell = 0;
        foreach(int sock in socks) {
            var ind = sock % n;
            pairsToSell[ind] +=1;
            if (pairsToSell[ind] == 2) {
                countToSell++;
                pairsToSell[ind] = 0;
            }
        }
        
        Console.WriteLine(countToSell);
}