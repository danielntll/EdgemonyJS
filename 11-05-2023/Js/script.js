const folders = [
  {
    name: "sport",
    colors: [
      "#460000",
      "#b10116",
    ],
    iconPath: "./assets/Sport-coin.png",
  },
  {
    name: "scienza",
    colors: [
      "#00054c",
      "#02329e",
    ],
    iconPath: "./assets/Scienza-coin.png",
  },
  {
    name: "work",
    colors: [
      "#462800",
      "#9e5e02",
    ],
    iconPath: "./assets/work-coin.png",
  },
  {
    name: "meditazione",
    colors: [
      "#1c4041",
      "#0ed0ce",
    ],
    iconPath: "./assets/Meditazione-coin.png",
  },
  {
    name: "divertimento",
    colors: [
      "#655f03",
      "#dcc500",
    ],
    iconPath: "./assets/Divertimento-coin.png",
  },
  {
    name: "cultura",
    colors: [
      "#36004c",
      "#65029e",
    ],
    iconPath: "./assets/Cultura-coin.png",
  },

]

//Build functions ------------
const createEL = (el) => document.createElement(el);
const getEl = (el) => document.querySelector(el);
const getAllEl = (el) => document.querySelectorAll(el);

//Ref -------------
const main = getEl("main");
const todoElems = createEL("ul");
todoElems.className = "todoElems";

const initCreateTodo = {
  id: null,
  completed: null,
  todo: null,
  folder: null,
  time: null,
}
let createTodo = {
  id: null,
  completed: null,
  todo: null,
  folder: null,
  time: null,
}

let todoList = [];

const setNewTodo = (key, value) => {
  createTodo[key] = value;
}



const buildAddTodoSection = () => {
  const addTodoSection = createEL("div");
  addTodoSection.className = "addTodoSection";

  const foldersSection = createEL("div");
  const foldersSectionTitle = createEL("h3");
  foldersSectionTitle.textContent = "Seleziona una cartella"

  foldersSection.className = "comp-addTodo";

  folders.map((data, index) => {
    const folder = createEL("div");
    const img = createEL("img");
    const text = createEL("p");

    folder.id = data.name;
    folder.className = "comp-addTodo-folder box-shadow-animation";
    folder.style.background = "linear-gradient(120deg, " + data.colors[0] + " 0%, " + data.colors[1] + " 100%)"

    folder.addEventListener("click", () => {
      selectThisFolder(data.name);
    })

    img.src = data.iconPath;
    text.textContent = data.name;

    folder.appendChild(img);
    folder.appendChild(text);
    foldersSection.appendChild(folder);
  });

  const inputSection = createEL("input");
  inputSection.setAttribute("type", "text");
  inputSection.setAttribute("placeholder", "Cosa devi fare?");
  inputSection.className = "inputTodoText";
  inputSection.addEventListener("change", (e) => {
    setNewTodo("todo", e.target.value);
  });

  const inputTime = createEL("input");
  inputTime.setAttribute("type", "range");
  inputTime.setAttribute("min", "5");
  inputTime.setAttribute("max", "60");
  inputTime.setAttribute("step", "5");
  inputTime.className = "inputTime";

  const inputTimeVelue = createEL("p");
  inputTimeVelue.className = "inputTimeValue";
  inputTimeVelue.textContent = "Quanto pensavi di metterci?";

  inputTime.addEventListener("input", (e) => {
    setNewTodo("time", e.target.value);
    inputTimeVelue.textContent = "Tempo stimato: " + e.target.value + " min";
  });

  const buttonAdd = createEL("button");
  buttonAdd.className = "btn-addTodo";
  buttonAdd.textContent = "Aggiungi alla lista +";
  buttonAdd.addEventListener("click", addTodo)

  addTodoSection.appendChild(foldersSectionTitle);
  addTodoSection.appendChild(foldersSection);
  addTodoSection.appendChild(inputSection);
  addTodoSection.appendChild(inputTimeVelue);
  addTodoSection.appendChild(inputTime);
  addTodoSection.appendChild(buttonAdd);
  main.appendChild(addTodoSection);
}

const buildTodoList = (auxTodoList) => {
  const getE = getEl(".todoElems");
  getE ? getE.textContent = "" : null;

  console.log("buildTodoList : ", auxTodoList);

  auxTodoList.forEach((item, index) => {
    const compTodo = createEL("li");
    compTodo.className = "comp-todo";


    const compTodoSx = createEL("div");
    compTodoSx.className = "comp-todo-sx";

    const img = createEL("img");
    img.className = "comp-todo-icon"
    img.src = folders.find(el => el.name === item.folder).iconPath;

    const info = createEL("p");
    info.className = "info";
    info.textContent = "MIN";

    const compTodoCounter = createEL("p");
    compTodoCounter.className = "comp-todo-counter";
    compTodoCounter.textContent = item.time;

    compTodoSx.appendChild(img);
    compTodoSx.appendChild(info);
    compTodoSx.appendChild(compTodoCounter);

    const compTodoDx = createEL("div");
    compTodoDx.className = "comp-todo-dx";

    const btnTodo = createEL("button");
    btnTodo.className = "btn-todo";
    btnTodo.textContent = "Completa";

    btnTodo.addEventListener("click", () => {
      if (item.completed) {
        completeTodo(index)
      } else {
        compTodo.classList.add("comp-todo-completed");
        item.completed = true;
        btnTodo.textContent = "Rimuovi"
      }
    });

    const todoName = createEL("div");
    todoName.className = "comp-todo-name";
    todoName.textContent = item.todo;

    compTodoDx.appendChild(btnTodo)
    compTodoDx.appendChild(todoName);

    compTodo.appendChild(compTodoSx);
    compTodo.appendChild(compTodoDx);
    todoElems.appendChild(compTodo);
  })
  main.appendChild(todoElems);
}


const selectThisFolder = (elemID) => {
  let allTodoSectionsRef = getAllEl(".comp-addTodo-folder");
  allTodoSectionsRef.forEach(element => {
    element.classList.remove("folder-selected");
  });
  document.getElementById(elemID).classList.add("folder-selected");
  setNewTodo("folder", elemID);
}

const completeTodo = (index) => {
  console.log("REMOVE this: ", index);
  todoList = todoList.filter((item, indexList) => {
    return indexList !== index
  });
  console.log("todoList", todoList);
  buildTodoList(todoList);
}


const addTodo = () => {
  let aux = createTodo;
  aux.id = Date.now();
  aux.completed = false;
  todoList.push(aux);
  buildTodoList(todoList);
  resetInputs()
}

const resetInputs = () => {
  console.log(createTodo);
  createTodo = {
    id: null,
    completed: null,
    todo: null,
    folder: null,
    time: null,
  }
  getEl(".inputTodoText").value = "";
  getEl(".inputTime").value = "";
  console.log(createTodo);
}

const showList = () => {
  let addSection = getEl(".addTodoSection");
  addSection.classList.toggle("display-none");
}

buildAddTodoSection();

// const buildFolder = (folderData, domRef) => {
//   const divFolder = createEL("div");
//   divFolder.className = "comp-folder";
//   divFolder.style.background = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";

//   domRef.appendChild(divFolder);
// }
// buildFolder(null, folderSectionRef);
