// IMPORT
import { writeDb, readDb } from "./dbManager.js";

let folders = [
  {
    name: "sport",
    colors: ["#460000", "#b10116"],
    iconPath: "./assets/Sport-coin.png",
    count: 0,
    description: "L'attività fisica fa bene alla salute.",
    suggestedToDo: 1,
  },
  {
    name: "scienza",
    colors: ["#00054c", "#02329e"],
    iconPath: "./assets/Scienza-coin.png",
    count: 0,
    description: "Saper astrarre e concretizzare è un'arte logica.",
    suggestedToDo: 2,
  },
  {
    name: "work",
    colors: ["#462800", "#9e5e02"],
    iconPath: "./assets/work-coin.png",
    count: 0,
    description:
      "Portare a termine dei compiti è tanto bello quanto non fare nulla.",
    suggestedToDo: 3,
  },
  {
    name: "meditazione",
    colors: ["#1c4041", "#0ed0ce"],
    iconPath: "./assets/Meditazione-coin.png",
    count: 0,
    description: "Il silenzio voluto è come un concerto cercato.",
    suggestedToDo: 1,
  },
  {
    name: "divertimento",
    colors: ["#655f03", "#dcc500"],
    iconPath: "./assets/Divertimento-coin.png",
    count: 0,
    description: "Sapersi distrarre è un'arte.",
    suggestedToDo: 1,
  },
  {
    name: "cultura",
    colors: ["#36004c", "#65029e"],
    iconPath: "./assets/Cultura-coin.png",
    count: 0,
    description: "Cercare quello che gli altri sanno è un sapere.",
    suggestedToDo: 3,
  },
];

//Build functions ------------
const createEL = (el) => document.createElement(el);
const getEl = (el) => document.querySelector(el);
const getAllEl = (el) => document.querySelectorAll(el);

//Ref -------------
const main = getEl("main");
const todoElems = createEL("ul");
todoElems.className = "todoElems";

const folderGrid = createEL("ul");
folderGrid.className = "main-folder-section";
folderGrid.classList.toggle("display-none");

const initCreateTodo = {
  id: null,
  completed: null,
  todo: null,
  folder: null,
  time: null,
};

let createTodo = {
  id: null,
  completed: null,
  todo: null,
  folder: null,
  time: null,
};

let todoList = [];

const setNewTodo = (key, value) => {
  createTodo[key] = value;
};

const buildContent = () => {
  const header = createEL("header");
  header.className = "main-header";

  const hBtn = createEL("button");
  hBtn.className = "btn-open-add";
  hBtn.textContent = "Chiudi -";
  hBtn.addEventListener("click", () => {
    hBtn.textContent === "Chiudi -"
      ? (hBtn.textContent = "Aggiungi +")
      : (hBtn.textContent = "Chiudi -");

    switchContent(hBtn.textContent === "Chiudi -");
  });

  header.appendChild(hBtn);
  main.appendChild(header);
  buildFolders();
  buildAddTodoSection();

  buildTodoList(todoList);
};

const switchContent = (status) => {
  console.log("STATO MODALE ADD: ", status);
  const getAddTodo = getEl(".addTodoSection");
  getAddTodo ? getAddTodo.classList.toggle("display-none") : null;
  folderGrid.classList.toggle("display-none");
};

const buildAddTodoSection = () => {
  const addTodoSection = createEL("div");
  addTodoSection.className = "addTodoSection";

  const foldersSection = createEL("div");
  const foldersSectionTitle = createEL("h3");
  foldersSectionTitle.textContent = "Che tipo di attività vuoi aggiungere?";

  foldersSection.className = "comp-addTodo";

  folders.map((data, index) => {
    const folder = createEL("div");
    const img = createEL("img");
    const text = createEL("p");

    folder.id = data.name;
    folder.className = "comp-addTodo-folder box-shadow-animation";
    folder.style.background =
      "linear-gradient(120deg, " +
      data.colors[0] +
      " 0%, " +
      data.colors[1] +
      " 100%)";

    folder.addEventListener("click", () => {
      selectThisFolder(data.name);
    });

    img.src = data.iconPath;
    img.setAttribute("alt", "icon todo type");
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
  buttonAdd.addEventListener("click", addTodo);

  addTodoSection.appendChild(foldersSectionTitle);
  addTodoSection.appendChild(foldersSection);
  addTodoSection.appendChild(inputSection);
  addTodoSection.appendChild(inputTimeVelue);
  addTodoSection.appendChild(inputTime);
  addTodoSection.appendChild(buttonAdd);
  main.appendChild(addTodoSection);
};

const buildFolders = () => {
  const getE = getEl(".main-folder-section");
  getE ? (getE.textContent = "") : null;

  folders.forEach((folder) => {
    const compFolder = createEL("li");
    compFolder.className = "comp-folder";

    const compFolderSX = createEL("div");
    compFolderSX.className = "comp-folder-sx";

    // compFolder;
    const compFolderImg = createEL("img");
    compFolderImg.classList = "comp-folder-icon";
    compFolderImg.src = folder.iconPath;
    compFolderImg.setAttribute("alt", "icon folder");

    const compFolderInfo = createEL("p");
    compFolderInfo.textContent = "Todos";
    compFolderInfo.classList = "info";

    const compFolderCounter = createEL("p");
    compFolderCounter.textContent = folder.count + "/" + folder.suggestedToDo;
    compFolderCounter.classList = "comp-folder-counter";

    compFolderSX.appendChild(compFolderImg);
    compFolderSX.appendChild(compFolderInfo);
    compFolderSX.appendChild(compFolderCounter);

    const compFolderDX = createEL("div");
    compFolderDX.className = "comp-folder-dx";

    const compFolderProgressStatus = createEL("div");
    compFolderProgressStatus.className = "comp-folder-progress-status";

    const compFolderProgressTodo = createEL("div");
    compFolderProgressTodo.className = "comp-folder-progress-todo";

    const compFolderProgressDone = createEL("div");
    compFolderProgressDone.className = "comp-folder-progress-done";
    let percVal = (100 / folder.suggestedToDo) * folder.count;

    percVal > 100 ? (percVal = 100) : null;

    compFolderProgressDone.style = "width : " + percVal + "%;";

    compFolderProgressTodo.appendChild(compFolderProgressDone);

    const compFolderPValues = createEL("div");
    compFolderPValues.className = "comp-folder-progress-values";

    compFolderProgressStatus.appendChild(compFolderProgressTodo);
    compFolderProgressStatus.appendChild(compFolderPValues);

    const compFolderName = createEL("div");
    compFolderName.className = "comp-folder-name";
    compFolderName.textContent = folder.name;

    const compFolderDescr = createEL("div");
    compFolderDescr.className = "comp-folder-description";
    compFolderDescr.textContent = folder.description;

    compFolderDX.appendChild(compFolderProgressStatus);
    compFolderDX.appendChild(compFolderName);
    compFolderDX.appendChild(compFolderDescr);

    compFolder.appendChild(compFolderSX);
    compFolder.appendChild(compFolderDX);
    folderGrid.appendChild(compFolder);
  });
  main.appendChild(folderGrid);
};

const buildTodoList = (auxTodoList) => {
  const getE = getEl(".todoElems");
  getE ? (getE.textContent = "") : null;

  auxTodoList.forEach((item, index) => {
    const compTodo = createEL("li");
    compTodo.className = "comp-todo";
    item.completed ? compTodo.classList.add("comp-todo-completed") : null;

    compTodo.style.background =
      "linear-gradient(120deg, " +
      folders.find((el) => el.name === item.folder).colors[1] +
      " 0%, " +
      folders.find((el) => el.name === item.folder).colors[0] +
      " 100%)";

    const compTodoSx = createEL("div");
    compTodoSx.className = "comp-todo-sx";

    const img = createEL("img");
    img.className = "comp-todo-icon";
    img.src = folders.find((el) => el.name === item.folder).iconPath;
    img.setAttribute("alt", "icon todo");

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

    item.completed
      ? (btnTodo.textContent = "Rimuovi")
      : (btnTodo.textContent = "Completa");

    btnTodo.addEventListener("click", async () => {
      if (item.completed) {
        completeTodo(index);
      } else {
        compTodo.classList.add("comp-todo-completed");
        item.completed = true;
        btnTodo.textContent = "Rimuovi";
        await writeDb.update(item.id, { completed: true });
      }
    });

    const todoName = createEL("div");
    todoName.className = "comp-todo-name";
    todoName.textContent = item.todo;

    compTodoDx.appendChild(btnTodo);
    compTodoDx.appendChild(todoName);

    compTodo.appendChild(compTodoSx);
    compTodo.appendChild(compTodoDx);

    todoElems.appendChild(compTodo);
  });
  main.appendChild(todoElems);
};

const selectThisFolder = (elemID) => {
  deselectFolders();
  document.getElementById(elemID).classList.add("folder-selected");
  setNewTodo("folder", elemID);
};

const deselectFolders = () => {
  let allTodoSectionsRef = getAllEl(".comp-addTodo-folder");
  allTodoSectionsRef.forEach((element) => {
    element.classList.remove("folder-selected");
  });
};

const completeTodo = async (index) => {
  console.log("DELETE this: ", index);
  let auxItem;
  todoList = todoList.filter((item, indexList) => {
    auxItem = item;
    writeDb.delete(auxItem.id);
    return indexList !== index;
  });
  buildFolders();
  buildTodoList(todoList);
};

const addTodo = async () => {
  if (
    createTodo.folder !== null &&
    createTodo.time !== null &&
    createTodo.todo !== null
  ) {
    let aux = createTodo;
    folders.forEach((folder) => {
      if (folder.name === createTodo.folder) folder.count++;
    });
    aux.id = Date.now();
    aux.completed = false;

    await writeDb
      .add(aux)
      .then(() => {
        console.log(
          "To do sincronizzato con il db. Prosegui con la sinc visiva."
        );
        todoList.push(aux);
        buildFolders();
        buildTodoList(todoList);
        resetInputs();
      })
      .catch((errore) => console.error("Impossible caricare. ERR:", errore));
  } else {
    alert("Inserire tutti i campi");
  }
};

const resetInputs = () => {
  createTodo = {
    id: null,
    completed: null,
    todo: null,
    folder: null,
    time: null,
  };
  deselectFolders();
  getEl(".inputTodoText").value = "";
  getEl(".inputTime").value = "";
  getEl(".inputTimeValue").textContent = "Quanto pensavi di metterci?";
};

const showList = () => {
  let addSection = getEl(".addTodoSection");
  addSection.classList.toggle("display-none");
};

await readDb.allByUserId(1).then((data) => {
  console.log("TODOS SYNCHED BY USERID = 1 : ", data);
  let { todos = [], todosCompletati = [] } = data;

  // let todosCompletati = data.todosCompletati;

  // if (todosCompletati === undefined || todosCompletati === null){
  //   todosCompletati = [];
  // }

  console.log(todos, todosCompletati);

  const mokCheNonSpacca = [
    {
      id: 1,
      completed: false,
      todo: "Mok",
      folder: "sport",
      time: 20,
    },
    {
      id: 155,
      completed: true,
      todo: "Mok completed",
      folder: "sport",
      time: 15,
    },
  ];
  todoList = [...mokCheNonSpacca];
  buildContent();
});
