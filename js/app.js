/*
 * Create a list that holds all of your cards
 */
function getCards() {
    /*this converts the NodeList into an array. I sourced it from
    (https://davidwalsh.name/nodelist-array) */
    const cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
    return cards;
}

myCards = getCards();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

myShuffledCards = shuffle(myCards);
console.log(myCards);


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*function to make each card clickable by selecting the class, looping through the
array and adding an eventListener to each element*/
function setCardEvents() {
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    console.log(cards[0]);
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            console.log("click! " + i);

            /*this function identifies which card was clicked*/
            function clickedCard() {

            }
            /*this function will add the open and show classes to cards that were clicked*/
            function flipCard() {

            }
        });
    }
}

setCardEvents();

/*const clickedCard = document.querySelector(".card");
 clickedCard.addEventListener("click", function(){
     console.log("card was clicked");

     var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
 });*/
