const createEl = document.getElementById("button-el");
const dialog = document.getElementById("card-dialog");

function openModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

function createTask() {
  statusSelected = document.getElementById("status").value;

  const card = document.createElement("div");
  card.className = "card";
  card.classList.add("card");
  card.textContent = "Hi Mom!";

  const findStatus = document.querySelector(
    `[data-status="${statusSelected}"]`
  );

  findStatus.appendChild(card);
}
