const openModalBtn = document.querySelector(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
let modalIsOpen = false;

const showModal = () => {
  overlay.style.display = "block";
  modalWindow.style.display = "block";
  modalIsOpen = true;
};

const closeModal = () => {
  overlay.style.display = "none";
  modalWindow.style.display = "none";
};

openModalBtn.addEventListener("click", showModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keyup", (event) => {
  if (modalIsOpen) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
});
