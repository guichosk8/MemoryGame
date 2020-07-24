document.addEventListener('DOMContentLoaded',() =>{
    //card options
    const cardArray = [
    {
        name: 'html',
        img: 'images/html.png'
    },
    {
        name: 'html',
        img: 'images/html.png'
    },
    {
        name: 'css',
        img: 'images/css.png'
    },
    {
        name: 'css',
        img: 'images/css.png'
    },
    {
        name: 'python',
        img: 'images/python.png'
    },
    {
        name: 'python',
        img: 'images/python.png'
    },
    {
        name: 'csharp',
        img: 'images/csharp.png'
    },
    {
        name: 'csharp',
        img: 'images/csharp.png'
    },
    {
        name: 'js',
        img: 'images/js.png'
    },
    {
        name: 'js',
        img: 'images/js.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    }
]

//create board game
const grid_div = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];

function createBoard(){
    for(let i=0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        // card.addEventListener('click',flipCard);
        grid_div.appendChild(card);
    }
}

createBoard();

function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0]===cardsChosenId[1]){
        alert('You found a match!');
    }
}

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray(cardId).name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500);
    }
}


})