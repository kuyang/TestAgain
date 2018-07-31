let myName = prompt('What\'s your name?');
let mySchool = prompt('Which high school did you attend?');
let mySubject = prompt('What was your favorite subject in high school?');
let myState = confirm('Will you be working in Montgomery County?');

alert('Hey ' + myName + '!' + ' I have heard of ' + mySchool + '. ' + mySubject + ' is a very interesting topic to study. ');

console.log(myName);
console.log(myAge);
console.log(mySport);
console.log(myHobby);

if(myState) {
    console.log('Hello ' + myName + ' I\'m older than 30 too');
} else {
    console.log('Hello ' + myName + ' you\'re so young!');
}


