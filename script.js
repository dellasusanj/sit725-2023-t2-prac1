function changeText() {
    //todo talk: this is front end script

    let potentialTexts = ['Text1','Text2','Text3','Text4','Text5'];
    let randomnumber = getRandomNumber(0,potentialTexts.length - 1);
    let textToChangeTo = potentialTexts[randomnumber];
    document.getElementById('header').innerHTML = textToChangeTo
    //todo put textToChangeTo on the html Page
}
    
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
    