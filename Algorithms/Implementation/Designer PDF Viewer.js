function main() {
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
        
    let charMap = new Map([
        ['a', 0],  ['b', 1],  ['c', 2],  ['d', 3],  ['e', 4],
        ['f', 5],  ['g', 6],  ['h', 7],  ['i', 8],  ['j', 9],
        ['k', 10], ['l', 11], ['m', 12], ['n', 13], ['o', 14],
        ['p', 15], ['q', 16], ['r', 17], ['s', 18], ['t', 19],
        ['u', 20], ['v', 21], ['w', 22], ['x', 23], ['y', 24], 
        ['z', 25],
    ]);    
    
    let tallestChar = h[charMap.get(word[0])];
    
    for (let i=1; i<word.length; i++) {
        if (tallestChar < h[charMap.get(word[i])])
            tallestChar = h[charMap.get(word[i])];
    }  
    
    console.log("" + word.length * tallestChar);
}

/* Other solution using charCodeAt API */
/*
function returnMaxHeight(alphabetArr, word) {
    let currentMax = 0;
    
    for (let i = 0; i < word.length; i++) {
        let cur = alphabetArr[word.charCodeAt(i) - 97];
        if (cur > currentMax) {
            currentMax = cur;
        }
    }
    
    return currentMax;
}
*/