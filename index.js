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
  const title = (input?.value || "").trim() || "New Task"; // if no title use an empty string and writes New task in its place

  const el = document.createElement("article");
  el.addEventListener("click", openModal);
  const id = "task-" + Date.now();
  el.id = id;
  el.dataset.id = id;
  el.className = "task-preview";
  const status = document.getElementById("status");
  const value = status.value;
  const statusText = status.options[status.selectedIndex].text;
  el.dataset.status = statusText;
  const header = document.createElement("header");
  const h3 = document.createElement("h3");
  h3.className = "task-title";
  h3.textContent = title;

  header.appendChild(h3);
  el.appendChild(header);

  const column = document.querySelector(
    `section[data-status="${el.dataset.status}"]`
  );
  column.appendChild(el);

  console.log(statusText, id, title);

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ id, title, status: statusText });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return el;
}

function deleteTask() {
  alert("This feature has yet to be implemented.");
}
