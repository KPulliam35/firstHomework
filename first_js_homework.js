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
  10 =g
  // Did you use const, let or var? Why did you choose the one you chose?
  
  /*I used const to declare a new variable `g`*/
  
  //What happens if you don't use const , let or var? Do you get an error? If so what does it say?*/
  
  /*g = 0 | You get a SyntaxError: Unexpected identifier*/
  
  // what happens if you write 10 = g?
  /*10 = g| You get a SyntaxError: Invalid left-hand side assignment*/


// Section3 I need to review more, bc I'm not making sense of this section of the homework
/*Is the code below an infinite loop? Why or why not?
Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.

*/   
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
// Section4 
// Write a for loop that will console.log the numbers 0 to 999.
//basic for loop


// for(let i=0; i<999; i++){
//     console.log(i)
// }
// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
for (let i = 1; i < 11; i++){
    console.log(`The value of i is: ` + i + ` of 10`);
}

// Section5 ( i as unable to open the first_bash_instructions.bash)

