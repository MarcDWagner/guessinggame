'use strict';

console.log('app is running');

let user = prompt('What is your name?');
console.log(user);
alert('Welcome: ' + user );
if (user === null) {
  alert('You need to provide your name.');
  user = prompt('No, really what is your name?');
}

let bestBranch = prompt('The Army is the best branch, right?');
bestBranch = bestBranch.toLowerCase();

switch (bestBranch) {
case 'yes':
  alert('You got that right!');
  break;
case 'no':
  alert('At least you tried.');
  break;
default:
  alert('Let me help, of course it is!');
}

let amazingActor = prompt('Was Heath Ledger\'s Joker one of the best acting performances ever?');
amazingActor = amazingActor.toLowerCase();

switch (amazingActor) {
case 'yes':
  alert('Best ever!');
  break;
case 'no':
  alert('You shouldn\t be a critic.');
  break;
default:
  alert('E for effort.');
}

let arizonaLightening = prompt('Does Arizona have the best lightening storms?');
arizonaLightening = arizonaLightening.toLowerCase();

switch (arizonaLightening) {
case 'yes':
  alert('No contest.');
  break;
case 'no':
  alert('Clearly don\'t know what you\'re talking about.');
  break;
default:
  alert('Come on now.');
}

let bestPet = prompt('Bunnies are the best pet.');
bestPet = bestPet.toLowerCase();

switch (bestPet) {
case 'yes':
  alert('You know it, and I know it.');
  break;
case 'no':
  alert('Wasn\t really asking.');
  break;
default:
  alert('Wasn\t really asking.');
}


