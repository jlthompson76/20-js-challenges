// Here are a list 20 of JavaScript challenges for you to complete. Write your answer below each challenge.

// Be sure to check to see if they work by using console.log, debugging or any method we learned so far that will help you

// ____________________________________________________________________________

// 1: Declare four variables called eat, drink, sleep, and lives . Assign the values "chicken", "bubble tea", false, and 9 to each of them respectively.  The variable sleep should not be allowed to be assigned a different value.  Note the values are not all strings.


// 2: Write a function called placeName() that takes a name and a place and returns the phrase "[name] is from [place]".


// 3: Write a function called greetings that takes as a parameter a foreign language and returns the word for hello for that language. Here is the list of languages and the corresponding word you have to support:

// Spanish => hola
// Japanese => konichiwa
// French => bonjour
// Chinese => nihao
// Italian => ciao
// Ex.
// greetings("Spanish");  //would return "hola"



// 5: Write a function called addThree that takes three numbers as parameters, adds them  together and returns their sum.


//______________________________________________________________________________
// WooHoo Passed 5 challenges, 15 more to go!
// _____________________________________________________________________________


// 6: Write a function called stringPlusString that takes two string parameters, joins them together (aka concatenates them) and alerts the resulting string.


// 7: Write a function called sentence that concatenates its four parameters, adds a period on the end of the resulting string and then returns that new string.


// 8: Write a function called twoNumbers that asks the user for two numbers (using prompt), adds them together and returns the sum.  Remember that prompt returns a string by default.  Use Number() to convert a string to a number.


// 6: Declare a variable counter and assign the value 0 to it.  After that, declare a function called count that should add one to the variable counter every time it is run.  So if you executed the function three times, the value of counter would become 3 . 
// Hints:
// it is important the you declare the variable counter before and not inside the function block for this to work.
// you can add one to a variable by appending ++ after it so for example x++ would add 1 to the variable x




// 7: Write a function called textCalc that takes three parameters: a number, another number, and a string.  If the string is 'add', the function should add the numbers and return the sum.  If the string is 'multiply', the function should multiply.  Do the same for 'subtract' and 'divide' as well. 




// 8: Write a function called squareIt that takes a number and returns the square of that number.

//Hint: So when this instruction says write a function "that takes  a number" that is another way of saying that the function should have a parameter that is a number.  You can call that parameter anything you want.  
// So something like:
// function squareIt(num) {
// }
// Math.sqrt takes the square root of a number and you want the square in other words the number times itself.
// Make sure to return the square of the number in a return statement.
// In this problem, everything should happen inside the function block.  You don't need anything declared outside of it.





// 9: Write a function called whichIsFirst that takes two string parameters and returns the string that comes first in the alphabet. If they are the same, you can obviously return either since they are the same! 
// Hint: the greater than and less than operators work on strings!




// 10: Write a function called doMadlibs that takes three parameters: first is foreignCountry, second is adverb and third is adjective. You will use these parameters to fill in the blanks to the following sentence:

    // If you are traveling in [foreign country] and find yourself having to cross a piranha-filled river, here's how to do it [adverb].  You must cross the river at night since piranhas are more [adjective] during the day and then you'll return the new resulting sentence.  You'll have to use string concatenation to accomplish this.
    
    // Ex.
    // doMadlibs('Canada', 'slowly', 'ugly');
    // would return the string "If you are traveling in Canada and find yourself having to cross a piranha-filled river, here's how to do it slowly. You must cross the river at night since piranhas are more ugly during the day"
    
    // Hint: Make sure that you don't leave out any spaces between words when you are concatenating.
    
    




//______________________________________________________________________________
// WooHoo Passed 10 challenges, 10 more to go!
// _____________________________________________________________________________
    

// 11: In a line after the existing assignment statement, use the typeof method to return the data type of the variable  mystery and assign it to a variable called type





//12: Write a program that asks the user what the capitol of Iowa is.  If the answer is "Des Moines", tell the user "Nice job!" otherwise tell them "No, the capitol is Des Moines".




//13: You are writing a program that must decide what price a movie ticket should be based on the age of the ticket holder.  Normally ticket price is $10 but if the ticket holder's age is 65 or older then the price should be discounted to $7.50 and similarly if the age is 12 or younger then the price should also be $7.50

// Your program will prompt the user to enter their age using the the prompt method.  You will then use the alert method to respond with the amount they need to pay. You'll need to use conditional statements to handle the three different age ranges and then alert proper amount.

// For example if the someone answers the prompt with 11 then you would then have your program alert(7.50);
    


//14: When you run this code, the user should be asked if they want to buy a new car.  If the answer is "yes" then the program should reply "Excellent choice!" (use the alert method).  If the answer is "no" then the program should reply "You're missing out." and if the answer is anything else, the answer "Sorry, I didn't understand you."

//15: Make a program that calculates the take home pay for your employee for the day.  You normally pay $12 an hour to your employees but if they work on the weekend you pay them overtime rates of $15 an hour.

// The program should ask you how long they worked (in hours) and what day it is (Sunday, Monday, Tuesday, etc) using the prompt method. Then using the answers to those questions, the program should tell you the amount you should pay the employee for that day using the alert method. 
// Use one or more logical operators (&& or || ) in your program.



//______________________________________________________________________________
// WooHoo Passed 15 challenges, 5 more to go! You can do it!!!
// _____________________________________________________________________________

//16: Use the prompt method to ask if the user likes ketchup on their hot dogs.  Right after that ask the user if they like mustard. Next ask if they like relish.  They should reply "yes" or "no" If the user likes all three, then use the alert method to tell them "Wow, all three?" otherwise just say "Good to know."
// Please use the logical operators && or || in your code.




//17: Write some code that console.log's the message "Do I have to repeat myself?" 1000 times. Use a loop but make sure not to get stuck in an infinite loop!


//18: Write a function called count that takes a parameter n which is a whole number greater than or equal to 1.  When executed, count should console.log the whole numbers from 1 to n.
// Ex.
// count(3);
// when executed will call console.log three times with the values 1, then 2 and finally 3.
// Remember to use a loop to solve this.



//19: Write a function called countEven that takes a parameter n which is an even whole number greater than or equal to 2.  When executed, countEven should console.log the even numbers from 2 to n.
// Ex.
// countEven(6);
// when executed will call console.log three times with the values 2, then 4 and finally 6. 
// Use a while loop to solve this.



// 20: Write a function called countOdd that takes a parameter n which is an odd whole number greater than or equal to 1.  When executed, countOdd should console.log the odd numbers from 1 to n. 
// Ex.  
// countOdd(5);
// when executed will call console.log three times with the values 1, then 3 and finally 5. 
// Use a for loop in your solution.





//______________________________________________________________________________
// WooHoo Passed ALL 20 challenges? 5 more to go! YOU MADE IT!!! HIGH FIVE!!!
// _____________________________________________________________________________






// ... Want to do more? Why sure here is a bonus on!
// Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.
// Ex.
// sum(5);
// would add 1 + 2 + 3 + 4 + 5 and return the sum which is 15
// sum(7);
// would add 1 + 2 + 3 + 4 + 5 + 6 + 7 and return the sum which is 28


// ...Still not enough? Try to create one and sumbit to the TFs to see if your challenge can stump them!