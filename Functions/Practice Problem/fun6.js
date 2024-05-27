function product(...arr){ //rest parameters 
    let sum=0; 
    for(let i=0; i<=arr.length-1; i++){
        sum+=arr[i];
    }
    console.log(sum);
}

product(10,20,30,40,50);

