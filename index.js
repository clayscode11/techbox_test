const createEl = document.getElementById("button-el");
const dialog = document.getElementById("card-dialog");
const titleValue = document.getElementById("task-title");

function openModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

function createTaskPreview() {
  // grabs the dom element again if fails we refer back to global variable
  const input = document.getElementById("task-title") || window.titleValue;
  const mapTitle = (input?.value || "").trim() || "New Task"; // if no title use an empty string and writes New task in its place

  const el = document.createElement("article");
  el.className = "task-preview";
  el.dataset.status = "To do"; // <- this maps to the html because it option uses data-status= "To do"

  const header = document.createElement("header");
  const h3 = document.createElement("h3");
  h3.className = "task-title";
  h3.textContent = mapTitle;

  header.appendChild(h3);
  el.appendChild(header);

  const column = document.querySelector(
    `section[data-status="${el.dataset.status}"]`
  );
  column.appendChild(el);
  return el;
}

function deleteTask() {
  alert("This feature has yet to be implemented.");
}
