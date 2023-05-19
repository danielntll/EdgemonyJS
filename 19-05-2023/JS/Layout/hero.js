import { createEl, getEl } from '../Utils/DOM.js';

// Variables --------------------------------------

// UI ELEMENTS ------------------------------------
export const createHero = (heroData) => {
  let divHero = createEl("div");
  divHero.className = "hero";

  let img = createEl("img");
  img.src = heroData.imgUrl;
  img.alt = "Hero card img";

  let divHeroContent = createEl("div");
  divHeroContent.className = "hero__content";

  let h2 = createEl("h2");
  h2.textContent = heroData.content;

  let cta = createEl("button");
  cta.textContent = heroData.ctaTextContent;
  cta.addEventListener("click", () => {
    window.location = "/pagina specifica";
  });
  divHeroContent.append(h2, cta);
  divHero.append(img, divHeroContent);

  return divHero;
}