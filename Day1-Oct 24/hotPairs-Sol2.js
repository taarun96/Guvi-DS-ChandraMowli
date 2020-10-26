//Q.2 Given an array of numbers arr, find the number of hot pairs, Hot pair here signifies pair (i, j) where i < j and arr[i] = arr[j]
//Eg. 1,2,3,1,1,2,3,4 - Ans. 5




var hotPairs= function (arr){
    let sum=0;
    let arr1 = arr.sort((a,b)=>a-b);
   // console.log(arr1);
    let i=0;
    for(j=0;j<arr1.length;j++)
       {
            
                if(arr1[j]===arr1[i])
                {
            //     console.log(j,i,arr1[j],arr1[i]);   
                 sum= sum+j-i;
            //     console.log(sum);
                }
                else{
                    i=j;
                }
            
        }
        console.log(sum);
};

hotPairs([1,2,3,1,1,3]);
