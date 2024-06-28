export function showFree(userInfo) {
  const { totalCuts, cutsNeeded } = userInfo?.loyaltyCard;

  if (totalCuts === cutsNeeded) {
    setTimeout(() => {
      alert("Parabéns! Seu próximo corte é gratuito!");
    }, 1200);
  }
}
