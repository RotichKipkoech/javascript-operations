# Function to prompt the user to choose an operation
def ask_operation():
    # Display menu to the user
    print("Choose an operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")
    
    # Get the user's choice
    choice = input("Enter the number corresponding to your choice: ")
    
    if choice == '1':
        operation = 'add'
        ask_numbers(operation)
    elif choice == '2':
        operation = 'subtract'
        ask_numbers(operation)
    elif choice == '3':
        operation = 'multiply'
        ask_numbers(operation)
    elif choice == '4':
        operation = 'divide'
        ask_numbers(operation)
    elif choice == '5':
        print('Thank you for using the calculator!')
        return
    else:
        print('Invalid choice. Please choose a number between 1 and 5.')
        ask_operation()  # Recurse if the input is invalid

# Function to prompt the user for two numbers and perform the operation
def ask_numbers(operation):
    try:
        num1 = float(input('Enter the first number: '))
        num2 = float(input('Enter the second number: '))

        # Perform the operation based on user choice
        if operation == 'add':
            result = num1 + num2
        elif operation == 'subtract':
            result = num1 - num2
        elif operation == 'multiply':
            result = num1 * num2
        elif operation == 'divide':
            if num2 == 0:
                print('Error: Division by zero is not allowed.')
                ask_operation()  # Go back to the operation menu
                return
            result = num1 / num2
        
        # Output the result to the user
        print(f'The result of {num1} {operation} {num2} is: {result}')
        
        # Ask if the user wants to perform another operation
        answer = input('Do you want to perform another operation? (yes/no): ')
        if answer.lower() == 'yes':
            ask_operation()  # Recurse to choose another operation
        else:
            print('Thank you for using the calculator!')

    except ValueError:
        print('Please enter valid numbers.')
        ask_numbers(operation)  # Recurse if input is invalid

# Start the calculator
ask_operation()
