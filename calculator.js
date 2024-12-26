// Importing the readline module to interact with the terminal
const readline = require('readline');

// Create an interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for a choice of operation
function askOperation() {
  rl.question('Choose an operation (add, subtract, multiply, divide): ', (operation) => {
    if (['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
      askNumbers(operation);
    } else {
      console.log('Invalid operation. Please choose from add, subtract, multiply, or divide.');
      askOperation(); // Recurse until valid input
    }
  });
}

// Function to prompt the user for two numbers
function askNumbers(operation) {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Check if the entered values are valid numbers
      if (isNaN(num1) || isNaN(num2)) {
        console.log('Please enter valid numbers.');
        askNumbers(operation); // Recurse if input is invalid
        return;
      }

      // Perform the operation based on user choice
      let result;
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            console.log('Error: Division by zero is not allowed.');
            rl.close();
            return;
          }
          result = num1 / num2;
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }
      
      // Output the result to the user
      console.log(`The result of ${operation} ${num1} and ${num2} is: ${result}`);

      // Ask if the user wants to perform another operation
      rl.question('Do you want to perform another operation? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          askOperation(); // Recurse to choose another operation
        } else {
          console.log('Thank you for using the calculator!');
          rl.close();
        }
      });
    });
  });
}

// Start the calculator
askOperation();
