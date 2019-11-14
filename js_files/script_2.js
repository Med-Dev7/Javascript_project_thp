let number = prompt("Donne moi un nombre pour calculer sont factorielle et superieure a 0");
if(number && number > 0){
let i = number - 1;
    while(i > 0){
        console.log(i)
        number *= i;
        i--;
    }
    console.log(number); 
}
