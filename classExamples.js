let captchArray = ['How many days are there in a week?', 'How many months are there in a year?', 'Who was the first president of the United States?']

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