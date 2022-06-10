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

This application will take a number from the user, convert it into an array, then replace specific numbers in that array with strings. 

## Setup/Installation Requirements

* Clone this repository to your computer.
* Open mr-robogers directory.
* Open index.html.
* Input a number in the field.

## Known Bugs

* No know bugs

## Tests

Describe: beepBoop()

Test 1: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test 2: "It should return "Please input a number for number" if the user doesn't input a number"
Code: beepBoop("String")
Expected Output: "Please input a number for number"

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

Test 7: "If a user inputs a name into a second argument, add that name to every occurence of "won't you be my neighbor?"
Code: beepBoop(5, "Frank")
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor Frank?', 4, 5]

Test 8: "If a user inputs a number instead of a name, return "Please input a string for name"."
Code: beepBoop(5, 5);
Expected Output: "Please input a string for name"

## License

[MIT](/LICENSE)

Copyright (c) 2022 Frank Timmons