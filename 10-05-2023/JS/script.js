
//Ref ------------------
const numbersEls = document.querySelectorAll(".v-dark");
const operatorsEls = document.querySelectorAll(".v-light");
const getResultEl = document.querySelector(".result");
const resetInput = document.querySelector(".reset");

const messageEl = document.querySelector(".message");

const calcFirstN = document.querySelector(".calc-firstNumber");
const calcOperator = document.querySelector(".calc-operator");
const calcSecondN = document.querySelector(".calc-secondNumber");
const calcOutput = document.querySelector(".calc-output");

//Conditions -------------
numbersEls.forEach(element => {
  element.addEventListener("click", () => {
    setNumbers(element.textContent)
  })
});

operatorsEls.forEach(element => {
  element.addEventListener("click", () => {
    setOperator(element.textContent)
  })
});
getResultEl.addEventListener("click", () => {
  doOperation();
});
resetInput.addEventListener("click", () => {
  resetAll()
});


document.addEventListener("keydown", (event) => {
  if (
    event.code === "Numpad0" ||
    event.code === "Numpad1" ||
    event.code === "Numpad2" ||
    event.code === "Numpad3" ||
    event.code === "Numpad4" ||
    event.code === "Numpad5" ||
    event.code === "Numpad6" ||
    event.code === "Numpad7" ||
    event.code === "Numpad8" ||
    event.code === "Numpad9" ||
    event.code === "NumpadDecimal"
  ) {
    setNumbers(event.key)
  }
  if (
    event.code === "NumpadAdd" ||
    event.code === "NumpadDivide" ||
    event.code === "NumpadMultiply" ||
    event.code === "NumpadSubtract"
  ) {
    setOperator(event.key);
  }
  if (event.code === "NumpadEnter") doOperation();
  if (event.code === "Backspace") resetAll();
});


//Variables --------------
let firstNumber;
let secondNumber;
let operator;
let result;

//Functions ----------
const displayValue = (elemRef, value) => {
  elemRef.textContent = value;
}

const resetDisplayValues = (elemRef) => {
  elemRef.textContent = undefined;
}

const resetAll = () => {
  calcOutput.classList.toggle("display-none");
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  result = undefined;
  resetDisplayValues(calcFirstN);
  resetDisplayValues(calcOperator);
  resetDisplayValues(calcSecondN);
  resetDisplayValues(calcOutput);
}

const doOperation = () => {
  calcOutput.classList.toggle("display-none");
  let nF = Number(firstNumber);
  let nS = Number(secondNumber);
  switch (operator) {
    case "+":
      displayValue(calcOutput, add(nF, nS))
      break;
    case "-":
      displayValue(calcOutput, diff(nF, nS))
      break;
    case "*":
      displayValue(calcOutput, molt(nF, nS))
      break;
    case "/":
      displayValue(calcOutput, div(nF, nS))
      break;

    default:
      presentAlert("Inserire i numeri")
      break;
  }
}

const add = (nF, nS) => {
  return nF + nS;
}
const diff = (nF, nS) => {
  return nF - nS;
}
const div = (nF, nS) => {
  return nF / nS;
}
const molt = (nF, nS) => {
  return nF * nS;
}

const setOperator = (value) => {
  operator = value;
  displayValue(calcOperator, operator);
}

const setNumbers = (value) => {
  if (operator === undefined) {
    firstNumber === undefined ?
      firstNumber = value
      :
      firstNumber += value;

    displayValue(calcFirstN, firstNumber);
  } else {
    secondNumber === undefined ?
      secondNumber = value
      :
      secondNumber += value;

    displayValue(calcSecondN, secondNumber);
  }
}

const presentAlert = (message) => {
  messageEl.textContent = message;
  messageEl.classList.remove("display-none");
  messageEl.classList.toggle("alert-toast");
  setTimeout(() => {
    messageEl.classList.add("display-none");
    messageEl.classList.toggle("alert-toast");
  }, 2000)
}