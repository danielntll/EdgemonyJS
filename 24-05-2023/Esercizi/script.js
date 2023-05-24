// Esercizio 1 -------------------

// let persona = ["Mario", "Rossi", "Italia"];

// let [nome, cognome, paese] = persona;

// console.log(nome, cognome, paese)




// Esercizio 2 -----------------

// let libro = {
//   titolo: "Il Nome della Rosa",
//   autore: "Umberto Eco",
//   anno: 1980
// };

// let { titolo, autore, anno } = libro;

// console.log(titolo, autore, anno);





// Avanzato 1 ------------------

let libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980
};

let { titolo, autore, anno = "Non specificato" } = libro;

console.log(titolo, autore, anno);


let persona = ["Mario", "Rossi", "Italia"];

let [nome, cognome, paese = "Non specificato"] = persona;

console.log(nome, cognome, paese)