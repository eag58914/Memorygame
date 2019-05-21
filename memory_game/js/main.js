
 var cards=
   [ {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png"
    } ];
var cardsInPlay=[];

function checkForMatch(){
    if(cardsInPlay[0]=== cardsInPlay[1]){
        alert ("You found a match");
    }else{
        alert("Sorry, try again");
    }
};

function flipCard(){
 const cardId = this.getAttribute('data-id');
 const card =cards[cardId];
this.setAttribute('src',card.cardImage);
console.log('User Flipped ' + cards[cardId].rank);
console.log(card.suit);
console.log(card.cardImage);
cardsInPlay.push(card.rank);
if(cardsInPlay.length === 2){
checkForMatch();
}
}

function createBoard(){
    for (i = 0; i < cards.length; i ++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src",'images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
   var board = document.getElementById('game-board').appendChild(cardElement);
    }
}
createBoard();