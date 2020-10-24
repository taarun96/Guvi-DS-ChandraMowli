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
