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

// terminal_homework.bash
# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it

# Create a directory called `death_star`

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`

# and create the following files in it:
# luke.txt
# ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
const fs = require(`fs`);
fs.rename(`ben_kenobi.txt`, `obi_wan.txt`, (err) => {
    if (err) throw err;
    console.log(`File renamed successfully!`);
});
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
cp death_star/storm_trooper.txt tatooine/storm_trooper.txt
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
mv luke.txt obi_wan.txt millenium_falcon/
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
mv tatoonie/millenium_falcon galaxy_far_far_away/
# Move `millenium_falcon` into `death_star`
mv millenium_falcon death_star/
# Move `princess_leia.txt` into the `millenium_falcon`
mv princess_leia.txt millenium_falcon/
# Delete `obi_wan.txt`
rm obi_wan.txt
# In `galaxy_far_far_away`, make a directory called `yavin_4`
 mkdir galaxy_far_far_away/yavin_4
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
mv death_star/millenium_falcon galaxy_far_far_away/yavin_4/
# Make a directory in `yavin_4` called `x_wing`
cd yavin_4 mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
mv princess_leia.txt galaxy_far_far_away/yavin_4/
mv luke.txt galaxy_far_far_away/yavin_4/x_wing/
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
mv galaxy_far_far_away/yavin_4/millenium_falcon galaxy_far_far_away/
mv galaxy_far_far_away/yavin_4/x_wing galaxy_far_far_away/
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3
# Move `darth_vader.txt` into `tie_fighter_1`
mv death_star/darth_vader.txt death_star/tie_fighter_1/
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
cp death_star/storm_trooper.txt death_star/tie_fighter_2/
cp death_star/storm_trooper.txt death_star/tie_fighter_3/
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
mv death_star/tie_fighter_1 galaxy_far_far_away/
mv death_star/tie_fighter_2 galaxy_far_far_away/
mv death_star/tie_fighter_3 galaxy_far_far_away/
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
rm -r galaxy_far_far_away/tie_fighter_2
rm -r galaxy_far_far_away/tie_fighter_3
# Touch a file in "**x_wing**" called "**the_force.txt**".
touch x_wing/the_force.txt
# Destroy the "**death_star**" and anyone inside of it.
rm death_star
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
mv x_wing millenium_falcon yavin_4/
# Celebrate!