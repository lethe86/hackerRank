function solve(n, p){
    // Complete this function
    var totalPages = 0;
    var realPage = 0;
    
    // Total pages of the book
    totalPages = parseInt((n-1)%2 + (n-1)/2 + 1);    
        
    if(totalPages == 1)
        return 0;
      
    // Check p(page) odd or even
    if (p%2 == 0) {
        if (p == 2)
            realPage = 2;
        else
            realPage = p - parseInt(p/2) + 1;
    } else {
        if (p == 1)
            realPage = 1;
        else
            realPage = p - parseInt(p/2);
    }    
        
    // Find fast way to page
    if (realPage <= Math.round(totalPages/2))
        return realPage - 1;
    else
        return totalPages - realPage;

    /* Others Algorithm */
    /*
    var ans = 0;
    var front = parseInt(p/2);
    var back = parseInt(n/2) - parseInt(p/2);
    
    if (front < back)
        ans = front;
    else
        ans = back;
    
    return ans;
    */
}