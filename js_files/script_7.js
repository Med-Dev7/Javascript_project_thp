function bot(){


        let msg = prompt("tapez votre message !");
        // console.log(msg.lastIndexOf("?"));
        // console.log(msg.length-1);
        console.log(msg);
        // console.log(msg.toUpperCase());
        if (msg && msg.lastIndexOf("?", msg.length-1) == msg.length-1){
            console.log("Ouais Ouais...");
        }
        else if (msg && msg == msg.toUpperCase()){
            console.log("Pwa, calme-toi...");
        }
        else if(msg.match(/Fortine/)){
            console.log("on s' fait une partie soum-soum ?")
        }
        else if(msg == ""){
            console.log("t'es en PLS ?")
        }
        else if (msg == "exit")
        {
            return
        }
        else
        console.log("balek.");
    // }
}

function perform(){
    console.log("Pour quittez la discution tapez: exit")
    while (true){
        // let msg = prompt("tapez votre message !");
    bot();   
    }

}
perform();


