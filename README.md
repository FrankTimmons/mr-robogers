# Mr. Roboger's Neighborhood

#### By Frank Timmons

#### An application that converts user input into a message in an array.

## Technologies Used

* JavaScript
* Markdown
* HTML
* CSS
* jQuery
* Bootstrap

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Tests

Describe: beepBoop()

Test 1: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test 2: "It should return 0 if the user doesn't input a number"
Code: beepBoop("String")
Expected Output: 0

Test 3: "It should replace every number containing 3 in the output array with 'Won't you be my neighbor?'"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 'Won't you be my neighbor?', 4, 5]

Test 4: "It should replace every number containing 2 in the output array with 'Boop!'"
Code: beepBoop(5);
Expected Output: [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5]

Test 5: "It should replace every number containing 1 in the output array with 'Beep!'"
Code: beepBoop(5);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]

Test 6: "The hierarchy for replacing numbers should be 3>2>1, so test 3 should run, then test 4, then test 5"
Code: beepBoop(39);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_