export const markSelectedComponent = (selector, selectedCategory) => {
  let allCategories = document.querySelectorAll(`.${selector}`);
  allCategories.forEach(cat => {
    if (cat.textContent === selectedCategory) {
      cat.classList.add("bg_success");
    } else {
      cat.classList.remove("bg_success");
    }
  })
}