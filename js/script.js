
function palin(lopo){
    let largo = lopo.length;
    let valu = [];
    for (let i = 0; i < largo; i++){
        let xd = false;
        if(lopo[i] == lopo[largo -1 - i]){
            xd = true;
        }
        valu.push(xd)
    }
    console.log(valu);
    
    let yuca = true;
    let i = 0
    while (i < largo && yuca !== false){
        if(valu[i] ==  false){
            yuca = false;
        } 
        i++
    }

    if(yuca == true){
        alert("è palindroma")
    } else{
        alert("non è palindroma")
    }
}

function num (){
    let pc = Math.ceil(Math.random()*5);
    let userNum = parseInt(prompt("dimi un numero tra 1 e 5"));

    let resultUser = prompt("La risposta es pari o dispari?");

    let sum = pc + userNum;

    console.log(sum);

    if(sum % 2 == 0 && resultUser == "pari"){
        alert("hai vinto")
    }else{
        alert("hai perso")
    }
}


palin(prompt("dimi una parola"));
num();