import { loyaltyCardFetch } from "../../services/loyaltycard-fetch.js";
import { showUserInfo } from "../loyaltycards/showUserInfo.js";
import { showHistory } from "../loyaltycards/showHistory.js";
import { showCard } from "../loyaltycards/showCard.js";

const form = document.querySelector("form");
const idCard = document.getElementById("id-card");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const idCardValue = idCard.value.trim();

    const userData = await loyaltyCardFetch(idCardValue);

    if (userData) {
      showUserInfo(userData);
      showHistory(userData);
      showCard(userData);
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível enviar o formulário");
  }
};
