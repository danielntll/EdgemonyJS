import { injectCss } from "../../../../JS/Utils/InjectCSSFile.js";
import { createEl } from "../../../../JS/Utils/DOM.js";
import { userpageUrl } from "../../../../JS/Utils/navigationUrls.js";
import { navigation } from "../../../../JS/index.js";


export const post = (dataPost) => {
  // IMPORT STYLE ------------------
  injectCss("../Pages/Homepage/Components/post/post.css");

  // VARIABLES ---------------------
  let date = new Date(dataPost?.data);

  let mainElement = createEl("div", "post");

  let divUserPopUp = createEl("div", "divUserPopUp")
  let post_avatarContainer = createEl("div", "post_avatarContainer");
  let img = createEl("img", "avatar_img");
  img.src = dataPost?.user.imgUrl || "./Assets/icons/profile.png";
  img.alt = "user img profile";
  img.addEventListener("click", () => handleOpenUserPostPage(dataPost));

  let card_user = createEl("div", "card_user");

  let card_user_header = createEl("div", "card_user_header");
  let card_user_img = createEl("img", "avatar_img");
  card_user_img.src = dataPost?.user.imgUrl || "./Assets/icons/profile.png";

  card_user_img.addEventListener("click", () => handleOpenUserPostPage(dataPost));


  let card_user_btn = createEl("div", "card_user_header_follow_btn");
  card_user_btn.textContent = "Follow";
  card_user_btn.addEventListener("click", () => handleFollowThisUser(dataPost))

  card_user_header.append(card_user_img, card_user_btn);

  let card_user_content = createEl("div", "card_user_content")

  let card_user_content_row1 = createEl("div", "card_user_content_row");

  let card_user_content_name = createEl("h3", "card_user_content_name");
  card_user_content_name.textContent = dataPost?.user.name;

  card_user_content_name.addEventListener("click", () => handleOpenUserPostPage(dataPost));

  card_user_content_row1.append(card_user_content_name);
  if (dataPost?.user.isVerified) {
    let card_user_content_verify = createEl("img", "post_content_header_icon")
    card_user_content_verify.src = "./Assets/icons/verified.png";
    card_user_content_verify.width = "20";
    card_user_content_verify.height = "20";
    card_user_content_row1.append(card_user_content_verify);
  }


  let card_user_content_row2 = createEl("div", "card_user_content_row");
  let card_user_content_userID = createEl("p", "card_user_content_userID");
  card_user_content_userID.textContent = "@" + dataPost?.user.id + "numeroid";

  card_user_content_row2.append(card_user_content_userID);

  let card_user_content_row3 = createEl("div", "card_user_content_row");
  let card_user_content_description = createEl("p");
  card_user_content_description.textContent = dataPost?.user.description;

  card_user_content_row3.append(card_user_content_description);

  let card_user_content_row4 = createEl("div", "card_user_content_row");

  let card_user_content_follower = createEl("p", "card_user_content_follower");
  card_user_content_follower.textContent = dataPost?.user.followers + " Followers"

  card_user_content_follower.addEventListener("click", () => handleOpenUserPostPage(dataPost));


  let card_user_content_following = createEl("p", "card_user_content_follower");
  card_user_content_following.textContent = dataPost?.user.following + " Following"

  card_user_content_following.addEventListener("click", () => handleOpenUserPostPage(dataPost));


  card_user_content_row4.append(card_user_content_follower, card_user_content_following)

  card_user_content.append(card_user_content_row1, card_user_content_row2, card_user_content_row3, card_user_content_row4);

  card_user.append(card_user_header, card_user_content);

  let post_content = createEl("div", "post_content");

  let post_content_header = createEl("div", "post_content_header");
  let post_content_header_userData = createEl("div", "post_content_header_userData");

  let userName = createEl("h3");
  userName.textContent = dataPost?.user.name;

  userName.addEventListener("click", () => handleOpenUserPostPage(dataPost))

  post_content_header_userData.append(userName)
  if (dataPost?.user.isVerified) {
    let verifiedImg = createEl("img", "post_content_header_icon");
    verifiedImg.src = "./Assets/icons/verified.png";
    verifiedImg.width = "20";
    verifiedImg.height = "20";
    post_content_header_userData.append(verifiedImg);
  }

  let post_content_header_userData_id = createEl("p", "post_content_header_userData_id");
  post_content_header_userData_id.textContent = "@" + dataPost?.user.id + "numeroid" + " " + "·" + " ";
  post_content_header_userData_id.textContent += date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  post_content_header_userData_id.textContent += ":"
  post_content_header_userData_id.textContent += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  // + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
  post_content_header_userData.append(post_content_header_userData_id);

  let post_content_header_postOptions = createEl("div", "post_content_header_postOptions");

  let optionsImgIcon = createEl("img");
  optionsImgIcon.src = "./Assets/icons/more-options.png";
  optionsImgIcon.alt = "post more options";
  optionsImgIcon.addEventListener("click", () => handlePostMoreOptions(dataPost));


  let post_content_message = createEl("div", "post_content_message");
  let message = createEl("p");
  message.textContent = dataPost?.body;

  let post_content_footer = createEl("div", "post_content_footer");

  postFooterButtons.forEach((elem) => {
    let post_content_footer_button_container = createEl("div", "post_content_footer_button_container");

    let post_content_footer_button = createEl("div", "post_content_footer_button");

    let img = createEl("img");
    img.src = elem.iconUrl;
    img.alt = elem.description;

    let span = createEl("span");
    span.textContent = dataPost[elem.name];

    post_content_footer_button.addEventListener("click", () => elem.action(dataPost));

    post_content_footer_button.append(img, span);

    post_content_footer_button_container.append(post_content_footer_button);
    post_content_footer.append(post_content_footer_button_container);
  });


  let post_content_footer_button_container = createEl("div", "post_content_footer_button_container");

  let post_content_footer_button = createEl("div", "post_content_footer_button");

  let imgButton = createEl("img");
  imgButton.src = "./Assets/icons/share.png";
  imgButton.alt = "share button";

  post_content_footer_button.addEventListener("click", () => handleSharePost(dataPost));

  post_content_footer_button.append(imgButton);

  post_content_footer_button_container.append(post_content_footer_button);
  post_content_footer.append(post_content_footer_button_container);

  // CONDITIONS --------------------
  post_content_message.append(message);

  post_content_header_postOptions.append(optionsImgIcon);
  post_content_header.append(post_content_header_userData, post_content_header_postOptions);

  post_content.append(post_content_header, post_content_message, post_content_footer);
  divUserPopUp.append(img, card_user)
  post_avatarContainer.append(divUserPopUp);

  mainElement.append(post_avatarContainer, post_content);
  // RETURN ------------------------
  return mainElement;
}


const handleOpenUserPostPage = (dataPost) => {
  console.log("handleOpenUserPostPage: ", dataPost);
  navigation.navigate.To(userpageUrl, dataPost.user);
}

const handleFollowThisUser = (dataPost) => {
  console.log("handleFollowThisUser: ", dataPost);
}

const handlePostMoreOptions = (dataPost) => {
  console.log("handlePostMoreOptions : ", dataPost);
}

const handleSharePost = (dataPost) => {
  console.log("handleSharePost : ", dataPost);
}


const postFooterButtons = [
  {
    name: "reply",
    iconUrl: "./Assets/icons/reply.png",
    description: "Reply button post",
    action: (postDataRef) => {
      console.log("postFooterButtons - reply action about: ", postDataRef);
    }
  },
  {
    name: "retweet",
    iconUrl: "./Assets/icons/retweet.png",
    description: "retweet button post",
    action: (postDataRef) => {
      console.log("postFooterButtons - retweet action about: ", postDataRef);
    }
  },
  {
    name: "like",
    iconUrl: "./Assets/icons/heart.png",
    description: "like button post",
    action: (postDataRef) => {
      console.log("postFooterButtons - like action about: ", postDataRef);
    }
  },
  {
    name: "views",
    iconUrl: "./Assets/icons/analytics.png",
    description: "views button post",
    action: (postDataRef) => {
      console.log("postFooterButtons - views action about: ", postDataRef);
    }
  },
]