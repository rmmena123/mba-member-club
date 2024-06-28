import { alertText } from "../../utils/alertText.js";

export function showFree(userInfo) {
  const { totalCuts, cutsNeeded } = userInfo?.loyaltyCard;

  if (totalCuts === cutsNeeded) {
    setTimeout(() => {
      alertText("Parabéns! Seu próximo corte é gratuito!");
    }, 1200);
  }
}
