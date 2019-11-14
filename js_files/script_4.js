const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  

  
  
  
  
  //   Filtre dans cette liste les entrepreneurs 
  // qui sont nés dans les années 70 ;
function year70Birth(){
    for (let index in entrepreneurs) {
        if (entrepreneurs[index]["year"] >= 1970 && 1979 >= entrepreneurs[index]["year"]){
            console.log(entrepreneurs[index]["year"]);
        }
    }
}

  //   Sors une array qui contient le prénom 
  // et le nom des entrepreneurs ;
function nameAndLastName(){
    let firstAndLast = []
    for (let index in entrepreneurs) {
       
        firstAndLast[index] = entrepreneurs[index]["first"] +" "+ entrepreneurs[index]["last"]; 
    }
    console.log(firstAndLast);
}


//   Quel âge aurait chaque inventeur aujourd'hui ?
function ageUntilNow(){
    for (let index in entrepreneurs) {
       console.log(2019 - entrepreneurs[index]["year"]);

    
    }
}

  //   Trie les entrepreneurs par ordre alphabétique 
  // du nom de famille.
function sortName(){
    let alphabetic_sort_name = []
    for (let index in entrepreneurs) {
       alphabetic_sort_name.push(entrepreneurs[index]["first"]);
    }
console.log(alphabetic_sort_name.sort());
}

console.log(year70Birth());
console.log(nameAndLastName());
console.log(ageUntilNow());
console.log(sortName());