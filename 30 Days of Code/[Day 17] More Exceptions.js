//Write your code here
class Calculator {   
    power(n, p) {
        if (n < 0 || p < 0)
            return "n and p should be non-negative"
        let pow = 1
        while(p-->0)
            pow *= n        
        return pow
    }
}