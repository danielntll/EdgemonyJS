//-------------- ESERCIZIO 1 --------------
/*
  Utilizzando le funzioni,
  riscrivere la calcolatrice creata durante l'esercitazione di giorno
  03-05-2023. 
*/
function getFirstNumber(isCorrect = true) {
  if (!isCorrect)
    return Number(
      prompt(
        "Calcolatrice : Attenzione! Il valore inserito non è un numero reale. Riprovare: Inserire il PRIMO numero (reale):"
      )
    );
  // qui non serve un else in quanto se la condizione è vera uscirà dalla funzione.
  return Number(prompt("Calcolatrice : Inserire il PRIMO numero (reale):"));
}
function getSecondNumber(isCorrect = true) {
  if (!isCorrect)
    return Number(
      prompt(
        "Calcolatrice : Attenzione! Il valore inserito non è un numero reale. Riprovare: Inserire il SECONDO numero (reale):"
      )
    );
  // qui non serve un else in quanto se la condizione è vera uscirà dalla funzione.
  return prompt("Calcolatrice : Inserire il SECONDO numero (reale):");
}
function getOperator(firstNumber, secondNumber) {
  return prompt(
    "Quale operazione effettuare tra: " +
      firstNumber +
      " e " +
      secondNumber +
      " ? (Opz: +, -, /, *)"
  );
}
function doBasicOparations(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      console.log(
        "Calcolatrice : ",
        firstNumber,
        operator,
        secondNumber,
        " = ",
        firstNumber + secondNumber
      );
      break;

    case "-":
      console.log(
        "Calcolatrice : ",
        firstNumber,
        operator,
        secondNumber,
        " = ",
        firstNumber - secondNumber
      );
      break;

    case "/":
      console.log(
        "Calcolatrice : ",
        firstNumber,
        operator,
        secondNumber,
        " = ",
        firstNumber / secondNumber
      );
      break;

    case "*":
      console.log(
        "Calcolatrice : ",
        firstNumber,
        operator,
        secondNumber,
        " = ",
        firstNumber * secondNumber
      );
      break;

    default:
      operator = prompt(
        "Attenzione, l'operatore selezionato non rientra in quelli proposti. Riprovare: Quale operazione effettuare tra: " +
          firstNumber +
          " e " +
          secondNumber +
          " ? (Opz: +, -, /, *)"
      );
      break;
  }
}

function es1() {
  //Variables --------------
  let firstNum;
  let secondNum;
  let operator;
  //Conditions ------------
  firstNum = getFirstNumber();
  while (isNaN(firstNum)) {
    firstNum = getFirstNumber(false);
  }
  secondNum = getSecondNumber();
  while (isNaN(secondNum)) {
    secondNum = getSecondNumber(false);
  }
  operator = getOperator(firstNum, secondNum);
  doBasicOparations(firstNum, secondNum, operator);
}

//-------------- ESERCIZIO 2--------------
/* Scrivere un oggetto che vi
    descriva, e stampare in console alcune di queste informazioni. Giusto per
    cominciare a prendere pratica con la sintassi e come richiamare valori di
    oggetti.
*/
let objUser = {
  name: "Daniel",
  surname: "Turcanu",
  height: "181",
  weight: "72",
  birthday: "18/01/1999",
  todoList: [
    {
      title: "Es1",
      description: "",
      priority: "Normal",
      added: "04/05/2023",
    },
    {
      title: "Es2",
      description: "",
      priority: "Highest",
      added: "04/05/2023",
    },
    {
      title: "Es3",
      description: "",
      priority: "Normal",
      added: "04/05/2023",
    },
    {
      title: "Es4",
      description: "",
      priority: "Highest",
      added: "04/05/2023",
    },
  ],
  didList: [
    {
      title: "Es123",
      description: "",
      priority: "Normal",
      when: "04/05/2023",
      completed: {
        when: "04/05/2023",
        note: "",
      },
    },
    {
      title: "Es124",
      description: "",
      priority: "Low",
      when: "04/05/2023",
      completed: {
        when: "05/05/2023",
        note: "",
      },
    },
  ],
  notes: [
    {
      when: "06/05/2023 - 12:02:45",
      title: "",
      note: "Lorem",
    },
    {
      when: "06/05/2023 - 13:02:45",
      title: "Lorew4",
      note: "Lorem",
    },
    {
      when: "06/05/2023 - 15:02:45",
      title: "Moleoc",
      note: "Lorem",
    },
  ],
};

const getUser = {
  name: function (user) {
    if (user.name === undefined)
      return console.error("L'utente non ha inserito questa informazione");
    return user.name;
  },
  surname: function (user) {
    if (user.surname === undefined)
      return console.error("L'utente non ha inserito questa informazione");
    return user.surname;
  },
  height: function (user) {
    if (user.height === undefined)
      return console.error("L'utente non ha inserito questa informazione");
    return user.height;
  },
  weight: function (user) {
    if (user.weight === undefined)
      return console.error("L'utente non ha inserito questa informazione");
    return user.weight;
  },
  birthday: function (user) {
    if (user.birthday === undefined)
      return console.error("L'utente non ha inserito questa informazione");
    return user.birthday;
  },
  todo: {
    all: function (user) {
      if (user.todoList === undefined)
        return console.log("L'utente ha completato tutto");
      return user.todoList;
    },
    last: function (user) {
      if (user.todoList === undefined)
        return console.log("L'utente ha completato tutto");
      let todoList = [...user.todoList]; // Serve una deep copy per non modificare i dati di partenza
      return todoList.pop();
    },
    first: function (user) {
      if (user.todoList === undefined)
        return console.log("L'utente ha completato tutto");
      let todoList = [...user.todoList]; // Serve una deep copy per non modificare i dati di partenza
      return todoList.shift();
    },
    priorityHighest: function (user) {
      if (user.todoList === undefined)
        return console.log("L'utente ha completato tutto");
      let auxArray = [];
      user.todoList.forEach((element) => {
        element.priority === "Highest" ? auxArray.push(element) : null;
      });
      return auxArray;
    },
    priorityNormal: function (user) {
      if (user.todoList === undefined)
        return console.log("L'utente ha completato tutto");
      let auxArray = [];
      user.todoList.forEach((element) => {
        element.priority === "Normal" ? auxArray.push(element) : null;
      });
      return auxArray;
    },
  },
  didList: function (user) {
    if (user.didList === undefined)
      return console.error("L'utente non ha ancora completato un compito");
    return user.didList;
  },
  notes: {
    all: function (user) {
      if (user.notes === undefined)
        return console.error("L'utente non ha ancora note segnate");
      return user.notes;
    },
    last: function (user) {
      if (user.notes === undefined)
        return console.error("L'utente non ha ancora note segnate");
      let auxNotes = [...user.notes];
      return auxNotes.pop();
    },
    first: function (user) {
      if (user.notes === undefined)
        return console.error("L'utente non ha ancora note segnate");
      let auxNotes = [...user.notes];
      return auxNotes.shift();
    },
  },
};

console.log(getUser.todo.last(objUser));
console.log(getUser.todo.priorityHighest(objUser));
console.log(getUser.didList(objUser));
console.log(getUser.notes.last(objUser));
console.log(getUser.notes.all(objUser));

// -------------- Esecuzione --------------
// es1();
