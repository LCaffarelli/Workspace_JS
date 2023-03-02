//notion callBack

let fct =function(){
    console.log("traitement de la fonction")
}

function fct2(laFonction){
    let fctARappeler =laFonction;
    if(Math.floor(Math.random()*10)<3){
        fctARappeler();
    }else{
        console.log("fonction non appelée")
    }
}

fct2(fct);
fct2(fct);
fct2(fct);
fct2(fct);
fct2(fct);

//notion avec lambda (le return se fait automatiquement avec une lambda sur une ligne)
fct2(()=>console.log("test1 avec lambda"))
fct2(()=>console.log("test2 avec lambda"))
fct2(()=>console.log("test3 avec lambda"))
fct2(()=>console.log("test4 avec lambda"))




