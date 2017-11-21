function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
        
    var nCnt = 0;
    var absCnt_f = 0;
    var absCnt_e = 0;
    var dupNumlist = [];
    var dupNumCntlist = [];
    var resultList = [];
    
    // Sorting
    a.sort((a, b) => a - b);   
    
    // Find duplicated number
    a.reduce(function(a, b) {
        if (a == b) {
            nCnt++;                          
        } else {
            dupNumlist.push(a);
            dupNumCntlist.push(nCnt + 1);
            nCnt = 0;
        }              
        return b;
    });
    
    // Add last duplicated number data
    dupNumlist.push(a[n-1]);
    dupNumCntlist.push(nCnt + 1);
                
    // Find difference abs=1 with duplicated number list
    for (var i=0; i<dupNumlist.length; i++) {
        a.find(function(a) {        
            if (a-dupNumlist[i] == 1)
                absCnt_e++;
            else if (dupNumlist[i]-a == 1)
                absCnt_f++;
        });        
        resultList.push(dupNumCntlist[i] + Math.max(absCnt_f, absCnt_e));
        absCnt_e = absCnt_f = 0;
    }
    
    if (resultList.length > 1)
        console.log("" + resultList.reduce((a, b) => Math.max(a, b)));
    else
        console.log("" + resultList[0]);
}