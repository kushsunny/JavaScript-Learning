// change it to "Ronald"
//Strings are immutiable so we can't change it directly like an array so we first convert it into an array then change 

 let str="Donald";
 let bag=""; 

 for(let i=0; i<=str.length-1; i++){
    if(str[i]=="D"){
        bag+="R"
    }else{
        bag+=str[i];
    }
 }
 console.log(bag);

































// for(let i=0; i<=str.length-1; i++){
//     if(str[i]=="D"){
//         str[i]="R"; 
//         console.log(str[i]);
//     }else{
//         // str[i]=str[i];
//         console.log(str[i])
//     }
// }

