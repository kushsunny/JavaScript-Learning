//Print the average of even numbers from 1 to 100 (both included)

let num=1; 
let sum=0; 
let count=0; 

while (num<=10){
    if(num%2==0){
        sum+=num;
        count++; 
    }
    num++; 
}
console.log(sum/count);