// -------------- es 1 -------------------------
const dinamicTxt = document.querySelector(".dinamicTxt");

const btnEs1 = document.querySelector(".btnEs1");

btnEs1.addEventListener("click", () => {
  let newNumber = Math.floor(Math.random() * 100);
  dinamicTxt.textContent = newNumber + " Ciao!";
});


// -------------- es 2 -------------------------
const form = document.querySelector("#form");

const respTxt = document.querySelector(".respTxt");
const clearRespTxt = document.querySelector(".clearRespTxt");

form.addEventListener("submit", ev => {
  ev.preventDefault();
  if (ev.target[0].value.length === 0) {
    respTxt.textContent = "Proprio zero pensieri? Fortunato te!";
  } else {
    respTxt.textContent = "Sul serio hai pensato a " + ev.target[0].value + "??";
    ev.target[0].value = "";
  }

});

clearRespTxt.addEventListener("click", () => {
  respTxt.textContent = "";
})

// -------------- es 3 -------------------------

// Var --------------
let tobuyList = [];

// Ref --------------
const inputList = document.querySelector(".inputList");
const btnAdd = document.querySelector(".btnAdd");
const elementsList = document.querySelector(".elList");

// Conditions -------
btnAdd.addEventListener("click", () => {
  buildNewElem(inputList.value);
  inputList.value = ""; //clear input value;
});

function buildNewElem(txtValue) {
  const newElem = document.createElement("li");
  newElem.textContent = txtValue;
  newElem.addEventListener("click", () => {
    newElem.classList.toggle("completed")
  });
  newElem.addEventListener("dblclick", () => {
    newElem.remove();
  });

  elementsList.appendChild(newElem);
}
