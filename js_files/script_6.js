function ProteineSeparete(){
let proteine = prompt("quels Arn vous voulez testez ? celle-ci: CCGUCGUUGCGCUACAGC ou celle-la : CCUCGCCGGUACUUCUCG");

    let i = 3;
    let y = 0;
    let substring_proteine = [];
    while(i <= proteine.length){
        substring_proteine.push(proteine.substring(y,i));
        y+=3;
        i+=3;
    } 
    return substring_proteine;
}



function checkProteine(arn_test){
let arn = {
    Sérine: ["UCU", "UCC","UCA", "UCG", "AGU", "AGC"],
    Proline: ["CCU",  "CCC", "CCA", "CCG"],
    Leucine: ["UUA", "UUG"], 
    Phénylalanine: ["UUU", "UUC"],
    Arginine: ["CGU", "CGC"],
    Tyrosine: ["UAU", "UAC"]
};
    let proteine_array = []

    if (arn_test){
        for (index in arn_test) { // 6 tours
            for(attribut in arn){ // 6 tours attribut
                for(index_prot in arn[attribut]){ // N tours par index d'un attribut
                    if(arn_test[index] == arn["Sérine"][index_prot] && arn["Sérine"][index_prot] == arn[attribut][index_prot] )
                        proteine_array.push("Sérine")
                    else if(arn_test[index] == arn["Proline"][index_prot] && arn["Proline"][index_prot] == arn[attribut][index_prot] )
                        proteine_array.push("Proline")
                    else if(arn_test[index] == arn["Leucine"][index_prot] && arn["Leucine"][index_prot] == arn[attribut][index_prot] )
                        proteine_array.push("Leucine")
                    else if(arn_test[index] == arn["Phénylalanine"][index_prot] && arn["Phénylalanine"][index_prot] == arn[attribut][index_prot] )
                        proteine_array.push("Phénylalanine")
                    else if(arn_test[index] == arn["Arginine"][index_prot]&& arn["Arginine"][index_prot] == arn[attribut][index_prot] )
                        proteine_array.push("Arginine")
                    else if(arn_test[index] == arn["Tyrosine"][index_prot] && arn["Tyrosine"][index_prot] == arn[attribut][index_prot])
                        proteine_array.push("Tyrosine")
                }             
            }
            
        }
    }
    return  proteine_array.join('-');

}


let returnArn = ProteineSeparete();
console.log(checkProteine(returnArn));
