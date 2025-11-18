// DOM MANIPULATION CHALLENGE: TO-DO LIST
// Instructions: Complete the functions below following the comments

// 1. DOM ELEMENT SELECTION
// TODO: Select the DOM elements you'll need
const taskInput = null; // Select the input where user types the task
const addButton = null; // Select the add button
const taskList = null; // Select the list where tasks will appear
const totalTasks = null; // Select the element that shows total tasks
const completedTasks = null; // Select the element that shows completed tasks
const pendingTasks = null; // Select the element that shows pending tasks
const clearCompleted = null; // Select the clear completed button
const clearAll = null; // Select the clear all button

// 2. FUNCTION TO CREATE A NEW TASK
function createTask(taskText) {
    // TODO: Create an <li> element for the task
    const taskItem = null;
    
    // TODO: Add the 'task-item' class to the element
    
    // TODO: Set the innerHTML of the element with the structure:
    // <input type="checkbox" class="task-checkbox">
    // <span class="task-text">TASK_TEXT</span>
    // <button class="delete-btn">Delete</button>
    
    // TODO: Add event listeners:
    // - On checkbox: when checked/unchecked, toggle the 'completed' class
    // - On delete button: remove the element from the list
    
    // TODO: Return the created element
    return taskItem;
}

// 3. FUNCTION TO ADD TASK
function addTask() {
    // TODO: Get the input value
    const taskText = null;
    
    // TODO: Check if the text is not empty (trim() removes spaces)
    if (/* condition here */) {
        // TODO: Create the task using the createTask function
        const newTask = null;
        
        // TODO: Add the task to the list
        
        // TODO: Clear the input
        
        // TODO: Update statistics
        updateStats();
    }
}

// 4. FUNCTION TO UPDATE STATISTICS
function updateStats() {
    // TODO: Count total tasks (all .task-item elements)
    const total = 0;
    
    // TODO: Count completed tasks (elements with 'completed' class)
    const completed = 0;
    
    // TODO: Calculate pending tasks (total - completed)
    const pending = 0;
    
    // TODO: Update the text of the statistics elements
    
    // TODO: If there are no tasks, show a message
    if (total === 0) {
        taskList.innerHTML = '<li class="empty-state">No tasks yet. Add one!</li>';
    }
}

// 5. FUNCTION TO CLEAR COMPLETED TASKS
function clearCompletedTasks() {
    // TODO: Select all tasks with 'completed' class
    const completedTasksList = null;
    
    // TODO: Remove each one from the list
    
    // TODO: Update statistics
    updateStats();
}

// 6. FUNCTION TO CLEAR ALL TASKS
function clearAllTasks() {
    // TODO: Confirm with user if they really want to clear everything
    if (/* confirmation condition */) {
        // TODO: Clear all content from the list
        
        // TODO: Update statistics
        updateStats();
    }
}

// 7. EVENT LISTENERS
// TODO: Add event listener to the add button
// TODO: Add event listener to the input to detect Enter key
// TODO: Add event listener to the clear completed button
// TODO: Add event listener to the clear all button

// 8. INITIALIZATION
// TODO: Call updateStats() to set up initial state

// TIPS FOR STUDENTS:
// - Use document.getElementById() or document.querySelector()
// - Use addEventListener() for events
// - Use createElement() to create elements
// - Use appendChild() to add elements
// - Use classList.add(), classList.remove(), classList.toggle()
// - Use querySelectorAll() to select multiple elements
// - Use textContent or innerHTML to set content
// - Use confirm() for user confirmations