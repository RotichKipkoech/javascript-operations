// Import required modules
const readline = require('readline');
const fs = require('fs');

// Create an interface to interact with the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Path to the to-do list file
const todoFilePath = 'todo.txt';

// Function to load tasks from the file
function loadTasks() {
  if (fs.existsSync(todoFilePath)) {
    const tasks = fs.readFileSync(todoFilePath, 'utf-8');
    return tasks.split('\n').filter(task => task.trim() !== '');
  }
  return [];
}

// Function to save tasks to the file
function saveTasks(tasks) {
  fs.writeFileSync(todoFilePath, tasks.join('\n'), 'utf-8');
}

// Function to display the main menu
function showMenu() {
  console.log('\n--- To-Do List ---');
  console.log('1. View Tasks');
  console.log('2. Add Task');
  console.log('3. Remove Task');
  console.log('4. Exit');
  rl.question('Choose an option (1-4): ', (choice) => {
    switch (choice) {
      case '1':
        viewTasks();
        break;
      case '2':
        addTask();
        break;
      case '3':
        removeTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please select a valid option.');
        showMenu();
    }
  });
}

// Function to view all tasks
function viewTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('\nYour Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

// Function to add a new task
function addTask() {
  rl.question('Enter a new task: ', (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log('Task added successfully!');
    showMenu();
  });
}

// Function to remove a task
function removeTask() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No tasks to remove.');
    showMenu();
    return;
  }

  console.log('\nSelect a task to remove:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

  rl.question('Enter the number of the task to remove: ', (taskNumber) => {
    const taskIndex = parseInt(taskNumber) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks.splice(taskIndex, 1);
      saveTasks(tasks);
      console.log('Task removed successfully!');
    } else {
      console.log('Invalid task number.');
    }
    showMenu();
  });
}

// Run the program
showMenu();
