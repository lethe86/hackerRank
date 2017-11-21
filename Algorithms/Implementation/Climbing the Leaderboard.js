function main() {
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    
    // Write Your Code Here 
    calcRanks(n, scores, m, alice);
}

// JaroslavPernica's Solution
// https://www.hackerrank.com/JaroslavPernica
function binSearch(arr, val, start, end) {
    let center;
    
    while (start <= end) {
        center = (start + end) >> 1;
        if (val == arr[center])
            break;
        if (val > arr[center])
            end = center - 1;
        else
            start = center + 1;
    }
    return center;
}

function calcRanks(n, score, m, alice) {
    let uniqscores = [score[0]], 
        rank, 
        end;
  
    for (let i = 1; i < n; i++)
        if (score[i-1] != score[i])
            uniqscores.push(score[i]);  
    end = uniqscores.length - 1;
    
    for (let a of alice) {
        rank = binSearch(uniqscores, a, 0, end);
        console.log("uniqscore[center]=" + uniqscores[rank]);
        if (uniqscores[rank] > a)
            rank++;
        end = rank;
        console.log(rank+1);
    }
}