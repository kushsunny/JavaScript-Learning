let marks=[45,56,78,99,100]
let total_marks=500; 
//calculate the total marks 
//also find the percentage 

let sum=0; 

for(let i=0; i<=marks.length-1; i++){
    sum=sum+marks[i];
}
console.log(sum);
console.log("Percentage =",sum/total_marks*100); 