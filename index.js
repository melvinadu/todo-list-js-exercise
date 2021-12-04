// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescription.push(description)
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // TEST CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed


//Lets use an object instead to keep track of the state
function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}

// //function that prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// //function that marks the provided task as completed
// commented out due to adding it to object as a method
// function completeTask (task) {
//   task.complete = true;
// }

//TEST CODE

const task1 = newTask("Clean cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

task1.logState(); //should return incomplete task
task1.markCompleted(); //should run function that completes task
task1.logState(); //should return complete task

console.log(tasks)
