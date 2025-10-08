const createEl = document.getElementById("button-el");
const dialog = document.getElementById("card-dialog");
const titleValue = document.getElementById("task-title");
const deleteEl = document.getElementById("delete-button");
deleteEl.addEventListener("click", deleteTask);
let el;
let task;

function openModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

function loadAndRebuildTask(event) {
  dialog.dataset.id = event.currentTarget.dataset.id;
  const id = dialog.dataset.id;

  dialog.showModal();

  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const task = tasks.find((t) => t.id === id);

  if (task) {
    document.getElementById("task-title").value = task.title;
    document.getElementById("status").value = task.status;
    document.getElementById("task-description").value = task.description;
  }
}

function createTaskPreview() {
  // grabs the dom element again if fails we refer back to global variable
  const input = document.getElementById("task-title") || window.titleValue;
  const title = (input?.value || "").trim() || "New Task"; // if no title use an empty string and writes New task in its place

  const descriptionInput = document.getElementById("task-description");
  const description = (descriptionInput?.value || "").trim() || "";

  el = document.createElement("article");
  el.addEventListener("click", loadAndRebuildTask);
  const id = "task-" + Date.now();
  el.id = id;
  el.dataset.id = id;
  el.className = "task-preview"; // ID Declaration

  const status = document.getElementById("status");
  const statusText = status.options[status.selectedIndex].text;
  el.dataset.status = statusText; // Status Declaration

  const header = document.createElement("header");
  const h3 = document.createElement("h3");
  h3.className = "task-title";
  h3.textContent = title; // Create title elements

  header.append(h3);
  el.appendChild(header); // append elements to header and root

  const column = document.querySelector(
    // following is all of the value mapping
    `section[data-status="${el.dataset.status}"]`
  );
  column.appendChild(el);

  console.log(statusText, id, title, description);

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ id, title, status: statusText, description: description });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return el;
}

function deleteTask(e) {
  id = dialog.dataset.id;
  if (!id) return;

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const fileredTasks = tasks.filter((t) => t.id !== tasks.id);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const card = document.querySelector(`article[data-id="${id}"]`);
  if (card) {
    card.remove();
  }

  dialog.close();
  //alert("This feature has yet to be implemented.");
}
