let arr=[1,2,3,4,5,6,7]; 

let minimum=+Infinity; 

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]<=minimum){
        minimum=arr[i];
    }
}
console.log(minimum)