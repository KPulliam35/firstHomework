// Section1 Terms

//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

/*DRY stand for Dont Repeat Yourself | This will help us not to write the same code over and over again | Loop & Boolean*/

// What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources

//  #Const maintains constnt values |Let is block scope and only available for use within that block | Var is at the top of the scope before the code execution.#

// Section2 Boolean expressions

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;

  console.log(a < b)
  console.log(c > d)
  console.log(e === e)
  console.log(a < b < c)
  console.log(a > 0 && d > 0)
  console.log(e === "Kelvin")
  console.log(48 === 48)
  // console.log(f = true, f_e = !e && f) #i cant figure out how to get this to become true#
  const g = 0
  console.log(g)

  // Did you use const, let or var? Why did you choose the one you chose?
  
  /*I used const to declare a new variable `g`
  
  //What happens if you don't use const , let or var? Do you get an error? If so what does it say?
  
  g = 0 | You get a SyntaxError: Unexpected identifier
  
  // what happens if you write 10 = g?
  10 = g| You get a SyntaxError: Invalid left-hand side assignment
  */


// Section3 While Loops

/*Is the code below an infinite loop? Why or why not?
  Yes. The condition is true which will make it run infinitely
Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.

Infinite Loop II
is this loop an infinite loop? why or why not?
 yes this is an infinite loop, but it will never reach the console.log statement bc the value of the runProgram is set to false. 

 Infinite or not infinite? What is the expected output?

 the aforementioned loop is infinite, but expected output is false bc runProgram is set to false.*/

// Reading code

//Instructions: Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal by adding comments before each line of code, explaining what that line of code will do.

// This line initializes a variable named "letters" with a value of "A"
let letters = "A";
// This line initializes a variable named "i" with a value of 0.
let i = 0;
// This line starts a while loop that runs as long as "i" is greater than 20.
while (i < 20) {
  // This letter "A" to the current value of letters.
	letters += "A";
  // This line increases the value of "i" by 1.
	i++;
}
// This line logs the final value of "letters" to the console.
console.log(letters);
// The code did as I expected and ran 2o times plus 1

// Section4 For Loops

// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
/*Differences -- In a for loop, the initial work is done outside the loop; Similarities -- Both lopos execute a block of code repeatedly unitl a certain conditon is met.*/
// What are the three components of the control panel? Each component is separated by a semicolon ;.
/*first part of th control panel = let i = 0 ; second part of the control panel = i < 100 ; third part of the control = i++ */

// Write a for loop that will console.log the numbers 0 to 999.
//basic for loop
for (let i = 0; i < 999; i++) {
	console.log(`The value of i is: ` + i + ` of 999`);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
for (let i = 1; i < 11; i++){
    console.log(`The value of i is: ` + i + ` of 10`);
}

// Section5 Terminal Practice
