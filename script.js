document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        //Get the value from input List
        const taskText = taskInput.value.trim(); //remove extra space

        //check if the input is empty

        if (taskInput === '') {
            alert('please enter a new task.');
            return;
        }

        //create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        //create remove button

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add event to remove the task when button is clicked
        removeBtn.onclick = function() {
        taskList.removeChild(li);
  };

       // Append button to li, and li to the list
       li.appendChild(removeBtn);
       taskList.appendChild(li);

      // Clear the input field
       taskInput.value = "";

    }

       addButton.addEventListener("click", addTask);

       taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask()


    }
    });
 });
