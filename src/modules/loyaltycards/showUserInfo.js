import { alertText } from "../../utils/alertText.js";

const userImg = document.querySelector(".user-profile .user-img");
const userName = document.querySelector(".user-info .title-sm");
const userClientSince = document.querySelector(".user-info .text-xs");

export function showUserInfo(userInfo) {
  try {
    userImg.style.backgroundImage = `url(${userInfo.linkProfileImg})`;
    userName.textContent = `${userInfo.name}`;
    userClientSince.textContent = `Cliente desde ${userInfo.clientSince}`;
  } catch (error) {
    console.log(error);
    alertText("Não foi possível retornar os dados do usuário.");
  }
}
