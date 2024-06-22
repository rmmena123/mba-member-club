export function showProgress(userInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = userInfo.loyaltyCard;

  const progressRemaining = document.querySelector(
    ".progress-info .progress-remaining strong"
  );
  progressRemaining.textContent = `${cutsRemaining}`;

  const progressBar = document.querySelector("progress");
  progressBar.setAttribute("value", `${totalCuts}`);
  progressBar.setAttribute("max", `${cutsNeeded}`);

  const progressCurrent = document.querySelector(".progress-bar .text-xs");
  progressCurrent.textContent = `${totalCuts} de ${cutsNeeded}`;
}
