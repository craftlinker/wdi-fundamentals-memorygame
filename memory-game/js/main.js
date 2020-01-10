



let cards=[
    {
        rank:"queen",
        suit:"hearts",
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank:"queen",
        suit:"diamonds"	,
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank:"kings",
        suit:"hearts",
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank:"kings",
        suit:"diamonds",
        cardImage: 'images/king-of-diamonds.png'
    }
];
let cardOne
let cardsInPlay = [];
function checkForMatch(){

    this.setAttribute('src','cards[cardId].cardImage')
    if(cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }    
        
    }
    
};


function flipCard(){

   let cardId = this.getAttribute('data-id')
console.log(" User Flipped " + " " + cards[cardId]);
cardsInPlay.push(cards[cardId])
console.log(cards[cardId].cardImage) + " " + console.log(cards[cardId].suit)
checkForMatch();

};


function createBoard(){

    for (let i = 0; i < cards.length; i++) {

        let cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id',cards[i]);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement)

    }
};

createBoard();