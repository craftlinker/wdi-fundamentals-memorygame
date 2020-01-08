




alert('you found a match!')

let cards=['queen', 'queen', 'king', 'king'];

let cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log('User fliped queen');

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log('User fliped king');

if(cardsInPlay.length === 2) {
    console.log(true)
}
else if( cardsInPlay[0] === cardsInPlay[1]){
    alert(' You found a match!')
}
