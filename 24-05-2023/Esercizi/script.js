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
  anno: 1980,
};

let {
  titolo = "Se non c'è il titolo c'è un errore di Upload x(",
  autore = "Non ho previsto che non ci fosse l'autore x(",
  anno = "Non specificato",
  nuovaKey = "Non sono sicuro che tutti i libri abbiano questa nuova key",
} = libro;

console.log(titolo, autore, anno);

let persona = ["Mario", "Rossi", "Italia"];

let [
  nome = "Non specificato",
  cognome = "Non specificato",
  paese = "Non specificato",
] = persona;

console.log(nome, cognome, paese);
