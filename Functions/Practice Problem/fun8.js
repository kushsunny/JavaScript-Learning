// using the above function determine what parameters are divisible by 3 in a limit of 1 and 100

function checkDiv(num){
    if(num%3==0){
        return true; 
    }else{
        return false; 
    }
}
for(let i=1; i<=100; i++){
    let divNum=checkDiv(i);

    if(divNum==true){
        console.log(i,"is divisible by 3");
    }
}


