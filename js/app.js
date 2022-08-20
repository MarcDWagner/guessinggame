'use strict';

console.log('app is running');

// This let statement will let me add correct answers as I go through code by using correctAnswers++;
// let correctAnswers = 0;

// User name
// let user = prompt('What is your name?');
// console.log(user);
// alert('Welcome: ' + user);
// if (user === null) {
//   alert('You need to provide your name.');
//   user = prompt('No, really what is your name?');
// }

// // Best military branch question
// let bestBranch = prompt('The Army is the best branch, right?');
// bestBranch = bestBranch.toLowerCase();

// switch (bestBranch) {
// case 'yes':
//   alert('You got that right!');
//   break;
// case 'no':
//   alert('At least you tried.');
//   break;
// default:
//   alert('Let me help, of course it is!');
// }

// // Favorite actor question
// let amazingActor = prompt('Was Heath Ledger\'s Joker one of the best acting performances ever?');
// amazingActor = amazingActor.toLowerCase();

// switch (amazingActor) {
// case 'yes':
//   alert('Best ever!');
//   break;
// case 'no':
//   alert('You shouldn\'t be a critic.');
//   break;
// default:
//   alert('E for effort.');
// }

// // Travel location question
// let travelCroatia = prompt('Have you ever been to Croatia?');
// travelCroatia = travelCroatia.toLowerCase();

// switch (travelCroatia) {
// case 'yes':
//   alert('Then you know how beautiful it is too.');
//   break;
// case 'no':
//   alert('I highly recommend it, the water is beautiful.');
//   break;
// default:
//   alert('You should go sometime.');
// }

// // Arizona lightening question
// let arizonaLightening = prompt('Does Arizona have the best lightening storms?');
// arizonaLightening = arizonaLightening.toLowerCase();

// switch (arizonaLightening) {
// case 'yes':
//   alert('No contest.');
//   break;
// case 'no':
//   alert('Clearly don\'t know what you\'re talking about.');
//   break;
// default:
//   alert('Come on now.');
// }

// // Best pet question
// let bestPet = prompt('Are bunnies are the best pet?');
// bestPet = bestPet.toLowerCase();

// switch (bestPet) {
// case 'yes':
//   alert('You know it, and I know it.');
//   break;
// case 'no':
//   alert('Wasn\'t really asking.');
//   break;
// default:
//   alert('Wasn\'t really asking.');
// }

// Guess my favorite number loop
// let guessNumber = prompt('What is my favorite number, 1 - 50?');
// let favoriteNumber = '22';

// for (let i = 1; i < 4; i++) {
//   if (guessNumber < favoriteNumber) {
//     alert('Your guess is too low.');
//   } else if (guessNumber > favoriteNumber) {
//     alert('Your guess is too high.');
//   } else {
//     alert('You got it!');
//     break;
//   }
//   guessNumber = prompt('What is my favorite number, 1 - 50');
// }
// if (guessNumber !== favoriteNumber) {
//   alert('You guessed too many times. The answer is 22.');
// }
// Guess States I've lived in
// let numberGuesses = 6;
// let answersStatesLivedIn = ['Alaska', 'North Carolina', 'Georgia', 'New york', 'Maryland', 'South Carolina'];
// let statesLivedIn = prompt('Guess a state that I have lived in previously.');
// let isStatesLivedIn = false;
// while (numberGuesses > 0) {
//   for (let state of answersStatesLivedIn) {
//     console.log(state);
//     if (statesLivedIn.toLowerCase() === state.toLowerCase()) {
//       isStatesLivedIn = true;
//     }
//     if (isStatesLivedIn === false); {
//       alert('That is not a state I have lived in.');
//     }
//     if (isStatesLivedIn === true) {
//       alert('That is correct!  All states I have lived in are: ' + answersStatesLivedIn + '.');
//       break;
//     }
//     numberGuesses -= 1;
//     if (numberGuesses === 0) {
//       alert('You have exceeded your guesses, all states I have previously lived in are: ' + answersStatesLivedIn + '.');
//     }
//   }
// }
// statesLivedIn = prompt('Guess a state that I have lived in previously.');





// for loop with all questions and answers in array
// let questions = [
//   'The Army is the best branch, right?',
//   'Was Heath Ledger\'s Joker one of the best acting performances ever?',
//   'Is Croatia a great vacation spot?',
//   'Does Arizona have the best lightening storms?',
//   'Are bunnies are the best pet?'
// ];
// let answers = [
//   'yes',
//   'yes',
//   'yes',
//   'yes',
//   'yes'
// ];
// for (let i = 0; i < questions.length; i++) {
//   let response = prompt(questions[i]);
//   if (response.toLowerCase() === answers[i]) {
//     alert('Got it!');
//   } else {
//     alert('Incorrect.');
//   }if (i === 5) {break; }
// }
// warm up, pushing a string into an array at a specific position
// function add2Array (string, number) {
//   let ourArray = [];
//   ourArray[number] = string;
//   return ourArray;
// }
// let response = add2Array('test',2);
// console.log(response);

