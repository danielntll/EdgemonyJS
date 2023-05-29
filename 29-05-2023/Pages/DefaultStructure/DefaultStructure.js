import { injectCss } from "../../JS/Utils/InjectCSSFile.js";
import { bookmarkspageUrl, homepageUrl, listpageUrl, messagespageUrl, notificationpageUrl, searchpageUrl, userpageUrl } from "../../JS/Utils/navigationUrls.js";
import { renderBookmarkPage } from "../BookmarkPage/BookmarkPage.js";
import { renderHomePage } from "../HomePage/HomePage.js";
import { renderListPage } from "../ListPage/ListPage.js";
import { renderMessagesPage } from "../MessagesPage/MessagesPage.js";
import { renderNotificationPage } from "../NotificationPage/NotificationPage.js";
import { renderSearchPage } from "../SearchPage/SearchPage.js";
import { renderUserPage } from "../UserPage/UserPage.js";

export const DefaultStructureRenderContent = (urlToRender) => {

  injectCss("../Pages/DefaultStructure/DefaultStructure.css");

  switch (urlToRender) {
    case homepageUrl:
      return renderHomePage();
    case searchpageUrl:
      return renderSearchPage();
    case notificationpageUrl:
      return renderNotificationPage();
    case messagespageUrl:
      return renderMessagesPage();
    case listpageUrl:
      return renderListPage();
    case bookmarkspageUrl:
      return renderBookmarkPage();
    case userpageUrl:
      return renderUserPage();

    default:
      return renderHomePage();
  }
}