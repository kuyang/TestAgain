let captchaArray = ['How many days are there in a week? (Spell it out)', 'How many months are there in a year?', 'Who was the first president of the United States?']

function captchaFunction(){
    let correctAnswer = ['Seven', 'Twelve', 'George Washington']
    for(let i = 0; i<captchaArray.length; i++){
        let result = prompt(captchaArray[i]);
        if(correctAnswer[i] !== result) {
            alert('Sorry Robot');
            return
        }
    }
    alert('Hello Human');
}

captchaFunction()



let myName = prompt('What\'s your name?');
let mySchool = prompt('Which high school did you attend?');
let mySubject = prompt('What was your favorite subject in high school?');
let myMovies = prompt('What is one of your top ten favorite movies of all time?');
let myState = confirm('Will you be working in Montgomery County?');
let myMusic = confirm('Have you heard of Drake?');
let myWake = confirm('Do you wake up early?');
let mySleep = confirm('Do you sleep late?');

alert('Hey ' + myName + '!' + ' I have heard of ' + mySchool + '. ' + mySubject + ' is a very interesting topic to study. ' 
        + 'I have always wanted to watch ' + myMovies + '. ');

console.log(myName);
console.log(mySchool);
console.log(mySubject);
console.log(myHobby);
console.log(myState);
console.log(myMusic);
console.log(myWake);
console.log(mySleep);

if(myState) {
    console.log('Hello ' + myName + ' I\'m older than 30 too');
} else {
    console.log('Hello ' + myName + ' you\'re so young!');
}


