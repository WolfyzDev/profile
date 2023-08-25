const moreButton = document.querySelector(".moreButton");
const popup = document.querySelector(".popup");

moreButton.addEventListener("click", () => {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

// Close the popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && event.target !== moreButton) {
    popup.style.display = "none";
  }
});