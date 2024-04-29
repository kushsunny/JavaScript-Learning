//Reverse Array Traversal

//4 3 2 1


let arr=[1,2,3,4]
let bag="";
    for(let i=arr.length-1; i>=0; i--){
        bag+=arr[i]+" ";
    }
    console.log(bag);