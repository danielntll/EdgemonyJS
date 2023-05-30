import { createEl, getEl } from '../../JS/Utils/DOM.js'

import {
  bookmarkspageUrl,
  homepageUrl,
  listpageUrl,
  messagespageUrl,
  notificationpageUrl,
  searchpageUrl,
  userpageUrl
} from '../../JS/Utils/navigationUrls.js';
import { navigation } from '../../JS/index.js';



export const NavbarComponent = (selectedUrl) => {
  console.log(selectedUrl)
  let navbar = createEl("div", "navbar");
  let navbar_utils = createEl("div", "navbar_utils");
  let ul = createEl("ul");

  navBarElements.map((navEl, index) => {
    let li = createEl("li");

    let navbar_utilsButton = createEl("div", "navbar_utils-button");
    let navbar_utilsButtonIcon = createEl("img", "navbar_utils-button-icon");

    selectedUrl === navEl.url ? navbar_utilsButton.classList.add("filter_primary") : navbar_utilsButton.classList.remove("filter_primary");
    navbar_utilsButtonIcon.src = selectedUrl === navEl.url ? navEl.iconUrl_selected : navEl.iconUrl;
    navbar_utilsButtonIcon.alt = navEl.alt;

    navbar_utilsButton.addEventListener("click", () => {
      navigation.navigate.To(navEl.url);
    })


    navbar_utilsButton.append(navbar_utilsButtonIcon);
    li.append(navbar_utilsButton);
    ul.append(li);
  });
  navbar_utils.append(ul);



  navbar.append(navbar_utils);
  return navbar;
}




export const navBarElements = [
  {
    name: "Home",
    iconUrl: "./Assets/icons/home.png",
    iconUrl_selected: "./Assets/icons/home-selected.png",
    alt: "navbar utils buttons home",
    url: homepageUrl,
  },
  {
    name: "Search",
    iconUrl: "./Assets/icons/search.png",
    iconUrl_selected: "./Assets/icons/search.png",
    alt: "navbar utils buttons home",
    url: searchpageUrl,
  },
  {
    name: "Notifications",
    iconUrl: "./Assets/icons/notification.png",
    iconUrl_selected: "./Assets/icons/notification-selected.png",
    alt: "navbar utils buttons home",
    url: notificationpageUrl,
  },
  {
    name: "Messages",
    iconUrl: "./Assets/icons/messages.png",
    iconUrl_selected: "./Assets/icons/messages-selected.png",
    alt: "navbar utils buttons home",
    url: messagespageUrl,
  },
  {
    name: "List",
    iconUrl: "./Assets/icons/list.png",
    iconUrl_selected: "./Assets/icons/list-selected.png",
    alt: "navbar utils buttons home",
    url: listpageUrl,
  },
  {
    name: "Bookmark",
    iconUrl: "./Assets/icons/bookmark.png",
    iconUrl_selected: "./Assets/icons/bookmark-selected.png",
    alt: "navbar utils buttons home",
    url: bookmarkspageUrl,
  },
  {
    name: "User",
    iconUrl: "./Assets/icons/user.png",
    iconUrl_selected: "./Assets/icons/user-selected.png",
    alt: "navbar utils buttons home",
    url: userpageUrl,
  },
]
