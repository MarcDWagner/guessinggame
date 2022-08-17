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

if (bestBranch === 'yes'); {
  alert('You got that right!');
} else if (null)
    alert('Please answer yes or no.'); {
} else {
    alert('At least you tried.');
}




