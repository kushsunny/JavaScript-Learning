// let name="sunny"; 
// console.log(name);


let name="Kiet College"
let bag="";

console.log(name.length);
console.log(name.length-1);
console.log(name[7]);
console.log(name[8]);
for(let i=0; i<=name.length-1; i++){
    bag+=name[i];
    console.log(name[i]);
}
console.log(bag);

for(let i=name.length-1; i>=0; i--){
    console.log(name[i]);
}