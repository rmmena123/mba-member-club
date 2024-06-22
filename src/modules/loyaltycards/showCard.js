const cardHeading = document.querySelector(".card-heading .card-info .text-xs");
const cardId = document.querySelector(".card-heading .card-id .subtitle-sm");
const cardPoints = document.querySelector(".card-points");

const ordinalText = {
  1: "primeiro",
  2: "segundo",
  3: "terceiro",
  4: "quarto",
  5: "quinto",
  6: "sexto",
  7: "sétimo",
  8: "oitavo",
  9: "nono",
  10: "décimo",
};

export function showCard(userInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = userInfo?.loyaltyCard;
  cardPoints.innerHTML = "";

  cardHeading.textContent = `Ao fazer cortes de cabelo, o ${ordinalText[cutsNeeded]} sai de graça!`;
  cardId.textContent = `ID: ${userInfo.id}`;

  for (let i = 0; i < cutsNeeded; i++) {
    const cardStamp = document.createElement("li");
    cardStamp.classList.add("item-check");

    if (i < totalCuts) {
      const imgCheck = document.createElement("img");
      imgCheck.setAttribute("src", "./src/assets/PinCheck.png");
      cardStamp.appendChild(imgCheck);
    } else if (i === cutsNeeded - 1) {
      const imgGift = document.createElement("img");
      imgGift.classList.add("gift-check");
      imgGift.setAttribute("src", "./src/assets/gift.svg");
      cardStamp.appendChild(imgGift);
    }

    cardPoints.appendChild(cardStamp);
  }
}
