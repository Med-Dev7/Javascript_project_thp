let level = prompt("Donne moi un nombre d'etages");
if (level && level > 0){
let space = " ";
let sharp = "#";
let i = 1;
    while(i <= level ){
        console.log(space.repeat(level - i) + sharp.repeat(i));
        i++;
    }
}