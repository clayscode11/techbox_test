const createEl = document.getElementById("button-el");
const dialog = document.getElementById("card-dialog");
const titleValue = document.getElementById("task-title");

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
  cardTitle = titleValue.value;
  card.classList.add("card");
  card.textContent = cardTitle;

  const findStatus = document.querySelector(
    `[data-status="${statusSelected}"]`
  );

  findStatus.appendChild(card);
}
