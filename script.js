let btn = document.getElementById("modal-box");
let modal = document.querySelector(".modal");
let hideModal = document.querySelector(".close");
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
hideModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
