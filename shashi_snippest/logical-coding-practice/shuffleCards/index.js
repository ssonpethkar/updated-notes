/** Write a function getDecks which create a branch new deck
 *  everytime for the game and then suffle the new deck to start the game  */

 var suits = ["spades", "diamonds", "clubs", "hearts"];
 var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
 function getDeck(suits, values) {
   let deck = [];
 
   for (let i = 0; i < suits.length; i++) {
     for (let j = 0; j < values.length; j++) {
       deck.push({suits : suits[i],values: values[j]});
     }
   }
 
   return deck;
 }
 
 function shuffle(deck) {
   let temp;
   for (let i = deck.length - 1; i > 0; i--) {
     let j = Math.floor(Math.random() * i);
     temp = deck[i];
     deck[i] = deck[j];
     deck[j] = temp;
 }
   return `${temp.suits} of ${temp.values}`;
 }
 
 console.log(shuffle(getDeck(suits, values)));
 
 // console.log(suits, values);
 