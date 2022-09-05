// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { execPath } = require("process")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// PSEUDO: create the jest test using the following methods: describe(it(expect()))
// For the describe method i described my function name to be called "code" which follows with the syntax ,() => { nested methods }
//within my describe method i added the it() method which in plain words describes the intent of the test.
//following the it() method i nested the expect() statemenst that will explains what the test should expect from the function and what it is to be received.
//since the challenge is expecting the three variables are to be taken as arguments i will be using three expect statements that will as prescribed.
// the test should expect the funtcion to pass in the variables as arguments to receive the expected output. 


// a) Create a test with expect statements using the variables provided.

describe("code",() => {
    it("reate a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

/////////////GOOD FAILURE////////////

// ReferenceError: code is not defined

//       17 | describe("code",() => {
//       18 |     it("reate a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//     > 19 |         expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//          |         ^

// b) Create the function that makes the test pass.

// PSEUDO: the challenge is to create a function the will take the given variables amd replace certain characters with a different character to output a new string that is represented as a "secret coded message"
//I created my function called "code" as instructed in the describe.
// within my code function i am indicating that there will be a parameter named string.
// the string param will be accepting the variables VALUES as arguments for the function.
// within my code function, i am expecting the function to return the param/argument valuse replacing certain characters of the string.
// the challeenge is expecting to replace the strings containg the characters: " a,e,i,o" to "4,3,1,0"
// for this to work i used the .replaceAll method to replace ALL similiar characters with the replacement character.
// to my understanding of the method the replaceAll method would specifically replace all similair replacement characters with a specifc character.
// i tried to research to find a solution where i could replace a variety of characters to a different set of characters with just one replace method but was not successful.
// i repeated the .replaceAll method for every character that was needed to be replaced as prescribed in the challenge.

const code = (string) => {
    return string.replaceAll("a","4").replaceAll("e", "3").replaceAll("E", "3").replaceAll("i", "1").replaceAll("o", "0")
 }




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.


// a) Create a test with expects statement using the variable provided.
// PSEUDO: create the jest test using the following methods: describe(it(expect()))
// For the describe method i described my function name to be called "wordsWithLetter" which follows with the syntax ,() => { nested methods }
//within my describe method i added the it() method which in plain words describes the intent of the test.
//following the it() method i nested the expect() statemenst that will explains what the test should expect from the function and what it is to be received.
//since the challenge is expecting the three variables are to be taken as arguments i will be using TWO expect statements that will as prescribed.
// the test should expect the funtcion to pass in the variables as arguments to receive the expected output. 



describe("wordsWithTheLetter",() => {
    it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        
        expect(wordsWithTheLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordsWithTheLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

/////////////GOOD FAILURE////////////

// ReferenceError: wordsWithTheLetter is not defined

// 53 | describe("wordsWithTheLetter",() => {
// 54 |     it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
// > 55 |         expect(wordsWithTheLetter(fruitArray,letterE)).toEqual(["Mango", "Apricot", "Peach"])


// b) Create the function that makes the test pass.

// PSEUDO: The challenge is create a function that would accept the variavle array and the string variable as arguments.
//The function should return the array with only the values that contain the string. In other words, return the word values that have the string letter. The values that do not contain the string letter should not be returned.
//for the function to execute this we would need an iterable that would iterate over the array and return the values providing the string letter.
// for my function i applied the high order function .filter which is used to filter the array on a set condition.
//according  function wordsWithLetter, i passed the array and letter as arguments. 
//within my function i set it to return the array argument filtered using .filtered.
//within my High order Function, i set the conditon to iterate the values.
//for every iteration i set the condition to return the values that inluded the letter string.
//i used .include() and i passed the letter argument as the argument to make the iteration to return the array with the values that included the letter argument.
//the .include() method will only specifcally return the values containing the specific letter argument. meaning if the letter was lowercase it will return me only the lowercase letter.
//to ensure that .includes returns the values that contain the letter argument whether its capitalized we must add another .includes() that takes in the letter argument. This time the second letter argument will have the mutator .toUppercase() which will specify that we are also including the values that have the lower case letter OR the uppercase letter
const wordsWithTheLetter = (array, letter) => {
    return array.filter((value) => value.includes(letter) || value.includes(letter.toUpperCase()))

    }
 
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// PSEUDO: create the jest test using the following methods: describe(it(expect()))
// For the describe method i described my function name to be called "fullhouse" which follows with the syntax ,() => { nested methods }
//within my describe method i added the it() method which in plain words describes the intent of the test.
//following the it() method i nested the expect() statemenst that will explains what the test should expect from the function and what it is to be received.
//since the challenge is expecting the three variables are to be taken as arguments i will be using FOUR expect statements that will as prescribed.
// the test should expect the funtcion to pass in the variables as arguments to receive the expected output. 


describe("fullHouse",() => {
    it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
        
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true



/////////////GOOD FAILURE////////////

// ReferenceError: fullHouse is not defined

//       89 |     it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
//       90 |         
//     > 91 |         expect(fullHouse(hand1)).toEqual(true)



// b) Create the function that makes the test pass.

//PSEUDO: i created a function called fullhouse that would pass an array as an argument.
// the objective of this function is to evaluate each array and determine if the array represents a full house similiar to what a fall house means in a card game, which is having one pair and three of a kind.
//  inside my full house function, i created a for loop that would iterate the array.
//within the for loop i used a conditional to set the conditions that will return me true or false if the array meets the condtion of a full house.
// the condition i have set is to determine if the value of the array at the index 0 is equal/similiar to values at different indexes.
//if it proves to be simmiliar it will return true otherwise false if it is not.


const fullHouse = (array) => {
    for(let i = 0; i < array.length; i++) {
       if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4] || array[0] !== array[1] && array[0] === array[2] && array[0] !== array[3] && array[0] === array[4] ){
          return true
       } else {
          return false
       }
    }
 }
