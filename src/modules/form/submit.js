import { loyaltyCardFetch } from "../../services/loyaltycard-fetch.js";
import { showUserInfo } from "../loyaltycards/showUserInfo.js";

const form = document.querySelector("form");
const idCard = document.getElementById("id-card");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const idCardValue = idCard.value.trim();

    const userData = await loyaltyCardFetch(idCardValue);

    if (userData) {
      showUserInfo(userData);
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível enviar o formulário");
  }
};
