//Calculate the avg of odd number between 1 and 15
let sum=0; 
let count=0; 
for(let i=1; i<=15; i++){
    if(i%2==1){
        sum+=i; 
        count++;
    }
    
}
let avg=sum/count;
console.log(avg);