//Q.2 Given an array of numbers arr, find the number of hot pairs, Hot pair here signifies pair (i, j) where i < j and arr[i] = arr[j]
//Eg. 1,2,3,1,1,2,3,4 - Ans. 5


// O(N*N)

var hotPairs= function (arr){
        let sum=0;
        for(i=0;i<arr.length;i++)
            {
                for(j=i+1;j<arr.length;j++)
                {
                   // console.log(i,j);
                    if(arr[i]===arr[j])
                    {
                    // console.log(arr[i],arr[j]);   
                     sum=sum+1;   
                    }
                }
            }
            console.log(sum);
};

hotPairs([1,2,3,1,1,3]);
