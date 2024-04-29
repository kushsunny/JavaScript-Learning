//Minimum in array
// In given array 1 is minimum so output is 1


let arr=[1,2,3,4,5]; 

let max=1000;
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]<=max){
        max=arr[i];
    }
}   
console.log(max)