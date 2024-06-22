export function showFree(userInfo) {
  const { totalCuts, cutsNeeded } = userInfo?.loyaltyCard;

  if (totalCuts === cutsNeeded) {
    alert("Parabéns! Seu próximo corte é gratuito!");
  }
}
