export function showProgress(userInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = userInfo.loyaltyCard;

  const progressRemaining = document.querySelector(
    ".progress-info .progress-remaining"
  );

  progressRemaining.innerHTML = `
    <p class="text-sm">
      <strong class="title-sm">${
        cutsRemaining >= 1 ? cutsRemaining : "Nenhum"
      }</strong> ${cutsRemaining > 1 ? "cortes" : "corte"} restantes
    </p>
  `;

  const progressBar = document.querySelector("progress");
  progressBar.setAttribute("value", `${totalCuts}`);
  progressBar.setAttribute("max", `${cutsNeeded}`);

  const progressCurrent = document.querySelector(".progress-bar .text-xs");
  progressCurrent.textContent = `${totalCuts} de ${cutsNeeded}`;
}
