let arr=[7,8,2,5,10,50,5]; 

let nootbook=-Infinity; 

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>=nootbook){
        nootbook=arr[i];
    }
}
console.log("largest number = "+nootbook);