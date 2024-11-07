//footer email btn
const emailBtn = document.querySelector(".container-fluid .emailBtn");

// on-button click
emailBtn.addEventListener("click", () => {
  const link = "mailto:chiwirehannah@gmail.com";

  // open the gmail app (native app)
  window.location.href = link;
});
