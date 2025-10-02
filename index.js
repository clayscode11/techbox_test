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
  const el = document.createElement("article");
  el.classList.add("task");
  el.className = "task";

  el.dataset.id = el.id || "";
  el.dataset.status = el.status || "To do";

  const header = document.createElement("header");

  const titleGenerator = document.createElement("h3");
  const mapTitle = titleValue.value;
  titleGenerator.textContent = mapTitle || "New Task";
  header.appendChild(titleGenerator);
  el.textContent = mapTitle;

  statusSelected = document.getElementById("status").value;
  el.textContent = mapTitle;

  const findStatus = document.querySelector(
    `[data-status="${statusSelected}"]`
  );

  findStatus.appendChild(el);
}
