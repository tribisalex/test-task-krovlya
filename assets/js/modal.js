const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const openButton1 = document.querySelector("#open-button1");
const phone = document.getElementById("phone");
const check = document.getElementById("check");
const buttonSubmit = document.getElementById("submit-button");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});


openButton1.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

buttonSubmit.addEventListener("click", function () {
  if (check.checked === true && phone.value) {
    check.checked = false;
    phone.value = ''
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    alert('Спасибо, Ваша заявка отправлена');
  }
})
