const createEl = document.getElementById("button-el");
const dialog = document.getElementById("card-dialog");
const titleValue = document.getElementById("task-title");
let el;

function openModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

function loadAndRebuildTask(event) {
  const id = event.currentTarget.dataset.id;

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

function deleteTask() {
  alert("This feature has yet to be implemented.");
}
