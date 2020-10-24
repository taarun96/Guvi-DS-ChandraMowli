// Q.1 Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.Return the minimum cost of deletions such that there are no two identical letters next to each other.Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.




var minCost = function(s, cost) {
    let sum = 0;
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] === s[i+1]) {
            
            
            if(cost[i]<cost[i+1])
            {
                sum=sum +cost[i];
            }
            else
            {
                sum=sum+cost[i+1];
            }
            
        }
    }
    console.log(sum);
    
};


minCost("abaacaa",[7,6,5,4,3,2,1]);
minCost("abc",[1,2,3]);
minCost("aabaa",[1,2,3,4,1]);