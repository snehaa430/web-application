
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, rgba(209, 177, 220, 0.27), #ed88c8ff)";
document.body.style.fontFamily = "Arial, sans-serif";

// Wrap existing content in a container
const container = document.createElement("div");
container.style.background = "#89db37ff";
container.style.padding = "20px";
container.style.borderRadius = "10px";
container.style.width = "320px";
container.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
container.style.textAlign = "center";

// Move body content into container
while (document.body.firstChild) {
  container.appendChild(document.body.firstChild);
}
document.body.appendChild(container);

// ----- Existing To-Do Logic -----

// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Colors for tasks
const colors = [
  "#a52323",
  "#e4e741ff",
  "#51b7d6ff",
  "#724b08ff",
  "#431481"
];

// Add task
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Assign random background color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  li.style.backgroundColor = randomColor;
  li.style.color = "white";
  li.style.padding = "10px";
  li.style.margin = "5px 0";
  li.style.listStyle = "none";
  li.style.cursor = "pointer";
  li.style.borderRadius = "5px";

  // Toggle complete
  li.addEventListener("click", function () {
    li.style.textDecoration =
      li.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
