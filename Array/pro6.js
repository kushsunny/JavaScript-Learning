let heroes=["Thor","Spiderman","Star Lord","Tony stark","Black Panther","Black widow"]; 

//

for(let i=0; i<=heroes.length-1; i++){
    if(heroes[i]=="Star Lord" || heroes[i]=="Black widow"){
        continue;
    }
    console.log(heroes[i]);
}