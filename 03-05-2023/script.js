//-------------- ESERCIZIO 1 --------------
/*
Consegna: Sulla base della lezione del giorno, 
scrivere un piccolo programmino che preso un input 
da parte dell'utente (prompt) di tipo number, 
verifichi se questo è pari o dispari e lo stampi in console. 
Si utilizzi il costrutto if-else.
*/

function es1() {
  let inNumber = parseInt(prompt("Inserire un numero intero:"));

  if (isNaN(inNumber)) {
    inNumber = parseInt(
      prompt(
        "Attenzione! Il valore inserito non è di tipo numerico. Inserire un numero intero:"
      )
    );
  } else {
    if (inNumber % 2 === 1) {
      console.log("Il numero : ", inNumber, " è dispari.");
    } else {
      console.log("Il numero : ", inNumber, " è pari.");
    }
  }
}

//-------------- ESERCIZIO 2 --------------
/*
Consegna: Svolgere lo stesso esercizio 1, 
utilizzando l'operatore ternario.
*/

function es2() {
  let inNumber = parseInt(prompt("Inserire un numero intero:"));

  if (isNaN(inNumber)) {
    inNumber = parseInt(
      prompt(
        "Attenzione! Il valore inserito non è di tipo numerico. Inserire un numero intero:"
      )
    );
  } else {
    inNumber % 2 === 1
      ? console.log("Il numero : ", inNumber, " è dispari.")
      : console.log("Il numero : ", inNumber, " è pari.");
  }
}

//-------------- ESERCIZIO 3 --------------
/*
Consegna: Utilizzando gli operatori matematici 
e avvalendosi del costrutto switch, scrivere un
piccolo programmino che simuli una calcolatrice. 
Questo, deve chiedere all'utente due numeri e un 
operatore matematico da scegliere. Infine deve 
essere mostrato in console il valore risultato
dai due numeri e dall'operazione scelta dall'utente.
*/

function es3() {
  let firstNum = Number(
    prompt("Calcolatrice : Inserire il PRIMO numero (reale):")
  );

  while (isNaN(firstNum)) {
    firstNum = Number(
      prompt(
        "Calcolatrice : Attenzione! Il valore inserito non è un numero reale. Riprovare: Inserire il PRIMO numero (reale):"
      )
    );
  }

  let secondNum = Number(
    prompt("Calcolatrice : Inserire il SECONDO numero (reale):")
  );

  while (isNaN(secondNum)) {
    secondNum = Number(
      prompt(
        "Calcolatrice : Attenzione! Il valore inserito non è un numero reale. Riprovare: Inserire il SECONDO numero (reale):"
      )
    );
  }

  let operator = prompt(
    "Quale operazione effettuare tra: " +
      firstNum +
      " e " +
      secondNum +
      " ? (Opz: +, -, /, *)"
  );

  switch (operator) {
    case "+":
      console.log(
        "Calcolatrice : ",
        firstNum,
        operator,
        secondNum,
        " = ",
        firstNum + secondNum
      );
      break;

    case "-":
      console.log(
        "Calcolatrice : ",
        firstNum,
        operator,
        secondNum,
        " = ",
        firstNum - secondNum
      );
      break;

    case "/":
      console.log(
        "Calcolatrice : ",
        firstNum,
        operator,
        secondNum,
        " = ",
        firstNum / secondNum
      );
      break;

    case "*":
      console.log(
        "Calcolatrice : ",
        firstNum,
        operator,
        secondNum,
        " = ",
        firstNum * secondNum
      );
      break;

    default:
      operator = prompt(
        "Attenzione, l'operatore selezionato non rientra in quelli proposti. Riprovare: Quale operazione effettuare tra: " +
          firstNum +
          " e " +
          secondNum +
          " ? (Opz: +, -, /, *)"
      );
      break;
  }
}

// -------------- Esecuzione --------------
// es1();   //TEST: PASSED!
// es2();   //TEST: PASSED!
// es3();   //TEST: PASSED!
