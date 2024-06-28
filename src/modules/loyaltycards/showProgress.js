export function showProgress(userInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = userInfo.loyaltyCard;

  const progressRemaining = document.querySelector(
    ".progress-info .progress-remaining"
  );

  if (totalCuts === cutsNeeded) {
    progressRemaining.innerHTML = `
      <p class="text-sm">Parabéns! O seu próximo corte é gratuito!</p>
    `;
  } else {
    progressRemaining.innerHTML = `
    <p class="text-sm">
      <strong class="title-sm">${cutsRemaining}</strong> ${
      cutsRemaining > 1 ? "cortes restantes" : "corte restante"
    } 
    </p>
  `;
  }

  const progressBar = document.querySelector("progress");
  progressBar.setAttribute("value", `${totalCuts}`);
  progressBar.setAttribute("max", `${cutsNeeded}`);

  const progressCurrent = document.querySelector(".progress-bar .text-xs");
  progressCurrent.textContent = `${totalCuts} de ${cutsNeeded}`;
}
