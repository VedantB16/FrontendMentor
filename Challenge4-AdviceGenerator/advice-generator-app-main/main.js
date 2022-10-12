document.addEventListener("DOMContentLoaded", () => {
  const adviceButton = document.querySelector(".advice-generator-button");
  adviceButton.addEventListener("click", async () => {
    const randomAdvice = await fetch("https://api.adviceslip.com/advice");
    const adviceText = await randomAdvice.json();
    console.log(adviceText);

    let advice = document.querySelector(".advice");
    let adviceID = document.querySelector(".advice-number");
    advice.innerHTML = `&#8220;${adviceText.slip.advice}&#8221;`;
    adviceID.innerHTML = adviceText.slip.id;
  });

  if (window.innerWidth > 550) {
    document
      .getElementsByClassName("divider")[0]
      .setAttribute("src", "./images/pattern-divider-desktop.svg");
  } else {
    document
      .getElementsByClassName("divider")[0]
      .setAttribute("src", "./images/pattern-divider-mobile.svg");
  }
});
