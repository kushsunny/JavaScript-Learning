

let movies=["Bahubali","KGF","Pushpa","Iron man","Avengers"];

// print all the movies except Pushpa and Avengers 

for(let i=0; i<=movies.length-1; i++){
    if(movies[i]=="Pushpa" || movies[i]=="Avengers"){
        continue; 
    }
    console.log(movies[i]);
}