const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];



//   Est-ce que tous les livres ont été 
//   au moins empruntés une fois ?
function rentedOrNot(){

    for (let index in books) {
        console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
        
        if (books[index]["rented"] > 0) {
            isRended = "Oui";               
        } else {
            return ("Non")
        }
    }
    return isRended;
}

//   Quel est livre le plus emprunté ?
function moreRented(){
    var theMostRended;
    for (let index in books) {
        console.log("Quel est livre le plus emprunté ?");
        if (books[index]["rented"] > theMostRended) {
            theMostRended = books[index]["rented"];

        }
        else if (!theMostRended && theMostRended != 0){
            theMostRended = books[index]["rented"]; 
        }
    
    }
    return theMostRended;
}



//   Quel est le livre le moins emprunté ?
function lessRented(){
    var thelesstRended;
    for (let index in books) {
        
        console.log("Quel est livre le moin emprunté ?");
        if (books[index]["rented"] < thelesstRended) {
            thelesstRended = books[index]["rented"];

        }else if (!thelesstRended && thelesstRended != 0){
            thelesstRended = books[index]["rented"]; 
        }
        
    }
    return thelesstRended;
}

//   Trouve le livre avec l'ID: 873495 ;
function findBook(id){
var notFind;
    for (let index in books) {
            console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
            
            if (books[index]["id"] == id) {
                return ("on a trouve le livre a l'id : " + id )               
            } else {
                notFind = "on a pas trouve le livre dont l'id est : " + id;
            }

    }
    return notFind;
}




//   Supprime le livre avec l'ID: 133712 ;
function deleteBook(id){
    var notFind;
        for (let index in books) {
                console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
                
                if (books[index]["id"] == 133712) {
                    books.slice(index,1);
                    return ("on a supprimer le livre dont l'id est: " + id)               
                } else {
                    notFind = "on a pas trouve le livre dont l'id : " + id;
                }
        }
        return notFind;
    }


//   Trie les livres par ordre alphabétique 
//   (sans celui avec l'ID 133712 car il est supprimé).

function BookSort(){
    var arrayTitre = [];
        for (let index in books) {
            console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
            if (books[index]["id"] != 133712) {
                arrayTitre.push(books[index]["title"]);
                
            } 
            
        }
        arrayTitre.sort();
        return arrayTitre;
    }
    

console.log(rentedOrNot());
console.log(moreRented());
console.log(lessRented());
console.log(findBook(873495));
console.log(deleteBook(133712));
console.log(BookSort());
