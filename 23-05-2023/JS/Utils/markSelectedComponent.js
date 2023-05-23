export const markSelectedComponent = (selector, selectedEl) => {
  let selected = document.querySelectorAll(`.${selector}`);
  console.log("selected : ", selected, selectedEl)
  selected.forEach(cat => {
    console.log("cat.textContent", cat.textContent)
    if (cat.textContent === selectedEl) {
      cat.classList.add("bg_success");
    } else {
      cat.classList.remove("bg_success");
    }
  })
}