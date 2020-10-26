//Q.2 Given an array of numbers arr, find the number of hot pairs, Hot pair here signifies pair (i, j) where i < j and arr[i] = arr[j]
//Eg. 1,2,3,1,1,2,3,4 - Ans. 5


// O(N*N)

var hotPairs= function (arr){
   let count={};
   let sum=0;
   for(let i=0;i<arr.length;i++)
   {   
     if(count[arr[i]]===undefined)
        {
        count[arr[i]]=1;
        }
        else
        {
        count[arr[i]]++;
        }
    } 
    //console.log(count);
    for(let n of Object.values(count))
    {
         let combinationcheck=Math.round(n*(n-1)/2);
         sum = sum +combinationcheck;        
    }
    console.log(sum);
};

hotPairs([1,2,3,1,1,3]);
