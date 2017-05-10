'use strict'

var user = prompt('What is your name?');
console.log('user', user);

alert('Hello ' + user + ' ! Let\s play a little game')

var greeting = prompt('You are going to ask me a few questions to see what kind of Pokemon trainer I am. Sound good? (Y|N)').toUpperCase();
console.log(greeting);

  if(greeting === 'Y' || greeting 'Yes'){
    alert('Great, I\'m excited to start this journey');
  }else{
    alert('Too..bad. A Dragonite holds you hostage!');
  }

 var starter = prompt('Out of the 3 original startes, which is the best one by Jake\'s opinion? (Bulbasaur|Squirtle|Charmander)').toLowerCase();

  if(starter === 'squirtle'){
    alert('Yea!! Water turtle for the win!!');
  }else if(starter === 'bulbasaur'){
    alert('Pshh, that weakling?! No way! ');
  }else{
    alert('Not a bad guess, but not the best..');
  }
