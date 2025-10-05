document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Initialize tasks array
  let tasks = [];

  // Load saved tasks from Local Storage
  function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks = JSON.parse(savedTasks); // Convert back to array
      tasks.forEach(taskText => createTaskElement(taskText));
    }
  }

  // Save tasks to Local Storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create and display a single task element
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Remove task both from DOM and Local Storage
    removeBtn.onclick = function() {
      taskList.removeChild(li);

      // Remove from tasks array
      tasks = tasks.filter(task => task !== taskText);

      // Update Local Storage
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Add new task function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a new task.");
      return;
    }

    // Add to array and Local Storage
    tasks.push(taskText);
    saveTasks();

    // Create new DOM element
    createTaskElement(taskText);

    // Clear input field
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks on page load
  loadTasks();
});

