import { createEl } from '../../../../JS/Utils/DOM.js'
import { navigation } from '../../../../JS/index.js';

export const UserPage_header = (userData, isYou = false) => {

  // VARIABLES ---------------------
  const userPage_header = createEl("div", "userPage_header");

  // backbutton ------------
  const userPage_header_backbutton = createEl("div", "userPage_header_backbutton");

  const userPage_header_backbutton_btn = createEl("div", "userPage_header_backbutton_btn");

  const userPage_header_backbutton_btn_img = createEl("img");
  userPage_header_backbutton_btn_img.src = "./Assets/icons/arrow.png";
  userPage_header_backbutton_btn_img.alt = "Go back button";

  userPage_header_backbutton_btn.append(userPage_header_backbutton_btn_img);

  userPage_header_backbutton_btn.addEventListener("click", () => {
    navigation.navigate.goBack();
  })

  const userPage_header_backbutton_userInfo = createEl("div", "userPage_header_backbutton_userInfo");

  const span = createEl("span");
  const userName = createEl("h3");
  userName.textContent = userData.name;
  span.append(userName);

  if (userData.isVerified) {
    const isVerifiedImg = createEl("img");
    isVerifiedImg.src = "./Assets/icons/verified.png";
    isVerifiedImg.alt = "User verified icon";
    span.append(isVerifiedImg);
  }

  const tweetsNumber = createEl("p");
  tweetsNumber.textContent = userData.totalTweets + " Tweets";

  userPage_header_backbutton_userInfo.append(span, tweetsNumber);

  userPage_header_backbutton.append(userPage_header_backbutton_btn, userPage_header_backbutton_userInfo);
  //header user -------------
  const userPage_header_user = createEl("div", "userPage_header_user");

  const userPage_header_user_back = createEl("div", "userPage_header_user_back");

  const userPage_header_user_avatar_section = createEl("div", "userPage_header_user_avatar_section");

  const userPage_avatar = createEl("div", "userPage_avatar");
  const userPage_avatar_img = createEl("img");
  userPage_avatar_img.src = userData.imgUrl;
  userPage_avatar_img.alt = userData.name + "img profile";

  userPage_avatar.append(userPage_avatar_img);

  const userPage_header_user_actions = createEl("div", "userPage_header_user_actions");

  if (isYou) {

  } else {
    const userPage_header_user_actions_btn_menu = createEl("div", "userPage_header_user_actions_btn");
    const userPage_header_user_actions_btn_menu_img = createEl("img");
    userPage_header_user_actions_btn_menu_img.src = "./Assets/icons/menu-h.png";
    userPage_header_user_actions_btn_menu_img.alt = "User option img";
    userPage_header_user_actions_btn_menu.append(userPage_header_user_actions_btn_menu_img);

    userPage_header_user_actions_btn_menu.addEventListener("click", () => {
      handleProfileOptions(userData)
    });

    const userPage_header_user_actions_btn_messages = createEl("div", "userPage_header_user_actions_btn");
    const userPage_header_user_actions_btn_messages_img = createEl("img");
    userPage_header_user_actions_btn_messages_img.src = "./Assets/icons/messages.png";
    userPage_header_user_actions_btn_messages_img.alt = "User option img";
    userPage_header_user_actions_btn_messages.append(userPage_header_user_actions_btn_messages_img);

    userPage_header_user_actions_btn_messages.addEventListener("click", () => {
      handleProfileMessage(userData);
    })

    const userPage_header_user_actions_btn_bell = createEl("div", "userPage_header_user_actions_btn");

    const userPage_header_user_actions_btn_bell_img = createEl("img");
    userPage_header_user_actions_btn_bell_img.src = "./Assets/icons/bell.png";
    userPage_header_user_actions_btn_bell_img.alt = "User notification img";

    userPage_header_user_actions_btn_bell.append(userPage_header_user_actions_btn_bell_img);

    userPage_header_user_actions_btn_bell.addEventListener("click", () => {
      handleUserNotification(userData);
    })

    const userPage_header_user_actions_btn_follow = createEl("div", "userPage_header_user_actions_btn_follow");

    const userPage_header_user_actions_btn_follow_txt = createEl("p");


    if (userData.isFollowed) {

      userPage_header_user_actions_btn_follow.classList.add("userPage_header_toUnfollow");

      userPage_header_user_actions_btn_follow_txt.textContent = "Following";
      userPage_header_user_actions_btn_follow.addEventListener("mouseover", () => {
        userPage_header_user_actions_btn_follow_txt.textContent = "Unfollow";
      });
      userPage_header_user_actions_btn_follow.addEventListener("mouseout", () => {
        userPage_header_user_actions_btn_follow_txt.textContent = "Following";
      })
      userPage_header_user_actions_btn_follow.addEventListener("click", () => {
        handleUnfollowUser(userData);
      })

      userPage_header_user_actions_btn_follow.append(userPage_header_user_actions_btn_follow_txt);
    } else {
      userPage_header_user_actions_btn_follow.classList.add("userPage_header_toFollow");

      userPage_header_user_actions_btn_follow_txt.textContent = "Follow";
      userPage_header_user_actions_btn_follow.addEventListener("click", () => {
        handleFollow(userData);
      });

      userPage_header_user_actions_btn_follow.append(userPage_header_user_actions_btn_follow_txt);
    }


    userPage_header_user_actions.append(userPage_header_user_actions_btn_menu, userPage_header_user_actions_btn_messages, userPage_header_user_actions_btn_bell, userPage_header_user_actions_btn_follow);
  }



  userPage_header_user_avatar_section.append(userPage_avatar, userPage_header_user_actions)

  userPage_header_user.append(userPage_header_user_back, userPage_header_user_avatar_section);

  // userPage_header_user_bio ------------
  const userPage_header_user_bio = createEl("div", "userPage_header_user_bio");

  const userPage_header_user_bio_name = createEl("div", "userPage_header_user_bio_name");
  const userPage_header_user_bio_name_txt = createEl("h2");
  userPage_header_user_bio_name_txt.textContent = userData.name;

  userPage_header_user_bio_name.append(userPage_header_user_bio_name_txt);
  if (userData.isVerified) {
    const isVerifiedImg = createEl("img");
    isVerifiedImg.src = "./Assets/icons/verified.png";
    isVerifiedImg.alt = "User verified icon";
    userPage_header_user_bio_name.append(isVerifiedImg);
  }


  const userPage_header_user_bio_id = createEl("div", "userPage_header_user_bio_id");

  const userPage_header_user_bio_id_txt = createEl("p");
  userPage_header_user_bio_id_txt.textContent = "@" + userData.id + "idUser";

  userPage_header_user_bio_id.append(userPage_header_user_bio_id_txt);


  const userPage_header_user_bio_description = createEl("div", "userPage_header_user_bio_description");
  const userPage_header_user_bio_description_txt = createEl("p");
  userPage_header_user_bio_description_txt.textContent = userData.description;

  userPage_header_user_bio_description.append(userPage_header_user_bio_description_txt);


  const userPage_header_user_bio_badges = createEl("div", "userPage_header_user_bio_badges");

  if (userData.platform.professional) {
    const userPage_header_user_bio_badge_platform = createEl("div", "userPage_header_user_bio_badge");

    const userPage_header_user_bio_badge_platform_img = createEl("img")
    userPage_header_user_bio_badge_platform_img.src = "./Assets/icons/platform.png";
    userPage_header_user_bio_badge_platform_img.alt = "Thi user is professional icon";

    const userPage_header_user_bio_badge_platform_txt = createEl("p");
    userPage_header_user_bio_badge_platform_txt.textContent = userData.platform.type;

    userPage_header_user_bio_badge_platform.append(userPage_header_user_bio_badge_platform_img, userPage_header_user_bio_badge_platform_txt);


    userPage_header_user_bio_badges.append(userPage_header_user_bio_badge_platform);
  }

  if (userData.location) {
    const userPage_header_user_bio_badge_location = createEl("div", "userPage_header_user_bio_badge");
    const userPage_header_user_bio_badge_location_img = createEl("img");
    userPage_header_user_bio_badge_location_img.src = "./Assets/icons/location-pin.png";
    userPage_header_user_bio_badge_location_img.alt = "User location badge";

    const userPage_header_user_bio_badge_location_txt = createEl("p");
    userPage_header_user_bio_badge_location_txt.textContent = userData.location.nation;

    userPage_header_user_bio_badge_location.append(userPage_header_user_bio_badge_location_img, userPage_header_user_bio_badge_location_txt);


    userPage_header_user_bio_badges.append(userPage_header_user_bio_badge_location);
  }

  if (userData.link) {
    const userPage_header_user_bio_badge_link = createEl("div", "userPage_header_user_bio_badge");

    const userPage_header_user_bio_badge_link_img = createEl("img");
    userPage_header_user_bio_badge_link_img.src = "./Assets/icons/link.png";
    userPage_header_user_bio_badge_link_img.alt = "Link icon bagde";

    const userPage_header_user_bio_badge_link_txt = createEl("a");
    userPage_header_user_bio_badge_link_txt.href = userData.link;
    userPage_header_user_bio_badge_link_txt.textContent = userData.link

    userPage_header_user_bio_badge_link.append(userPage_header_user_bio_badge_link_img,
      userPage_header_user_bio_badge_link_txt);

    userPage_header_user_bio_badges.append(userPage_header_user_bio_badge_link);
  }

  const userPage_header_user_bio_badge_joined = createEl("div", "userPage_header_user_bio_badge");
  const userPage_header_user_bio_badge_joined_img = createEl("img");
  userPage_header_user_bio_badge_joined_img.src = "./Assets/icons/calendar.png";
  userPage_header_user_bio_badge_joined_img.alt = "Joined date icon badge"

  const userPage_header_user_bio_badge_joined_txt = createEl("p");

  const date = new Date(userData.joined.start);
  userPage_header_user_bio_badge_joined_txt.textContent = "Joined " + monthNames[date.getMonth()] + date.getFullYear();

  userPage_header_user_bio_badge_joined.append(userPage_header_user_bio_badge_joined_img, userPage_header_user_bio_badge_joined_txt);

  userPage_header_user_bio_badges.append(userPage_header_user_bio_badge_joined);




  // follows --------
  const userPage_header_user_follow = createEl("div", "userPage_header_user_follow");

  const userPage_header_user_follow_counter = createEl("div", "userPage_header_user_follow_counter");

  const userPage_header_user_follow_counter_following_number = createEl("b")
  userPage_header_user_follow_counter_following_number.textContent = userData.following

  const userPage_header_user_follow_counter_following_txt = createEl("p");
  userPage_header_user_follow_counter_following_txt.textContent = "Following";

  userPage_header_user_follow_counter.append(userPage_header_user_follow_counter_following_number, userPage_header_user_follow_counter_following_txt);

  const userPage_header_user_follow_counter2 = createEl("div", "userPage_header_user_follow_counter");

  const userPage_header_user_follow_counter_follower_number = createEl("b");
  userPage_header_user_follow_counter_follower_number.textContent = userData.followers;

  const userPage_header_user_follow_counter_follower_txt = createEl("p");
  userPage_header_user_follow_counter_follower_txt.textContent = "Follower"

  userPage_header_user_follow_counter2.append(userPage_header_user_follow_counter_follower_number,
    userPage_header_user_follow_counter_follower_txt
  )


  userPage_header_user_follow.append(userPage_header_user_follow_counter, userPage_header_user_follow_counter2);

  userPage_header_user_bio.append(userPage_header_user_bio_name, userPage_header_user_bio_id, userPage_header_user_bio_description, userPage_header_user_bio_badges, userPage_header_user_follow);

  // CONDITIONS --------------------

  // RETURN ------------------------

  userPage_header.append(userPage_header_backbutton, userPage_header_user, userPage_header_user_bio);

  return userPage_header;
}



const handleProfileOptions = (userData) => {
  console.log("handleProfileOptions: ", userData);
}
const handleProfileMessage = (userData) => {
  console.log("handleProfileMessage: ", userData);
}
const handleUserNotification = (userData) => {
  console.log("handleUserNotification : ", userData);
}
const handleUnfollowUser = (userData) => {
  console.log("handleUnfollowUser : ", userData);
}
const handleFollow = (userData) => {
  console.log("handleFollow: ", userData);
}



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
