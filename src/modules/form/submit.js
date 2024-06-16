import { loyaltyCardFetch } from "../../services/loyaltycard-fetch.js";

const form = document.querySelector("form");
const idCard = document.getElementById("id-card");

form.onsubmit = async (event) => {
  event.preventDefault();

  const idCardValue = idCard.value.trim();

  const data = await loyaltyCardFetch(idCardValue);
  console.log(data);
};
