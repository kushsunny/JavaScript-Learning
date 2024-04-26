// print the series 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let bag=""
for(i=1; i<=5; i++){
    bag+=i+" "; 
    console.log(bag);
}

//5 4 3 2 1

let jhola=""; 
for(let i=5; i>=1; i--){
    jhola+=i+" "; 
}
console.log(jhola);

let cont=1; 
for(let i=1; i<=4; i++){
    cont=cont*i+" ";
}
console.log(cont);