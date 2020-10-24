//Q.2 Given an array of numbers arr, find the number of hot pairs, Hot pair here signifies pair (i, j) where i < j and arr[i] = arr[j]
//Eg. 1,2,3,1,1,2,3,4 - Ans. 5


var hotPairs= function (arr){
        let sum=0;
        for(i=0;i<arr.length;i++)
            {
                if(arr[i]<arr[i+1])
                {
                     sum=sum+1;   
                }
            }
            console.log(sum);
};

hotPairs([1,2,3,1,1,2,3,4,5]);
