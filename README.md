**Free Code Camp Intermediate Algorithm Scripting challenges**

* **Sum All Numbers in a Range**: We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

* **Diff Two Arrays**: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note: You can return the array with its elements in any order.

* **Seek and Destroy**: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.

* **Wherefore art thou**: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

* **Spinal Tap Case**: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

* **Pig Latin**: Pig Latin is a way of altering English Words. The rules are as follows:
  * If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
  * If a word begins with a vowel, just add way at the end.

* **Search and Replace**: Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

* **DNA Pairing**: Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix. The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

  * For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]. The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

* **Missing letters**: Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

* **Sorted Union**: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

* **Convert HTML Entities**: Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

* **Sum All Odd Fibonacci Numbers**: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

* **Sum All Primes** : A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

* **Smallest Common Multiple**: Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order.

    * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

* **Drop it**: Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

* **Steamroller**: Flatten a nested array. You must account for varying levels of nesting.

* **Binary Agents**: Return an English translated sentence of the passed binary string. The binary string will be space separated.

* **Everything Be True**: Check if the predicate (second argument) is truthy on all elements of a collection (first argument). In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

* **Arguments Optional**: Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum. If either argument isn't a valid number, return undefined.

* **Make a Person**: Fill in the object constructor with the following methods below:
    * getFirstName()
    * getLastName()
    * getFullName()
    * setFirstName(first)
    * setLastName(last)
    * setFullName(firstAndLast)
    <br>
    Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

* **Map the Debris**: According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

   <p align="center">
      <img src="https://global.discourse-cdn.com/freecodecamp/original/3X/3/b/3b3831f4334b255f143b3b1cdb0656f41bd008df.png" />
   </p>
 
 
        * a  is the orbit's semi-major axis
        * μ=GM  is the standard gravitational parameter
        * G  is the gravitational constant,
        * M  is the mass of the more massive body.

    Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). The array will contain objects in the format {name: 'name', avgAlt: avgAlt}. The values should be rounded to the nearest whole number. The body being orbited is Earth. The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
