const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const closeAdvantages = document.querySelector(".close-advantages");
const openButton = document.querySelector("#open-button");
const openButton1 = document.querySelector("#open-button1");
const phone = document.getElementById("phone");
const check = document.getElementById("check");
const buttonSubmit = document.getElementById("submit-button");
const slide = document.querySelector(".slide");

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


closeAdvantages.addEventListener("click", function() {
  modalOverlay.classList.toggle("closed");
  slide.classList.toggle("slide-show");
  closeAdvantages.classList.toggle("close-button-show");

})