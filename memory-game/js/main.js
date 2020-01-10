



let cards=[
    {
        rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds"	,
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank:"kings",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank:"kings",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
let cardOne
let cardsInPlay = [];
function checkForMatch(){
    if(cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }    
        

    }
    
};


function flipCard(cardId){
   
  
console.log(" User Flipped " + " " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank)
console.log(cards[cardId].cardImage) + " " + console.log(cards[cardId].suit)
checkForMatch();

};
flipCard(0);
flipCard(2);