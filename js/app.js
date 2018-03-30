/*
 * Array that holds all of the cards
 */
const iconsArray = ["fa fa-diamond", "fa fa-diamond",
    "fa fa-paper-plane-o", "fa fa-paper-plane-o",
    "fa fa-anchor", "fa fa-anchor",
    "fa fa-bolt", "fa fa-bolt",
    "fa fa-cube", "fa fa-cube",
    "fa fa-leaf", "fa fa-leaf",
    "fa fa-bicycle", "fa fa-bicycle",
    "fa fa-bomb", "fa fa-bomb"
];

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

/* SOURCE: BORJA MIRALLES
function startGameBoard() {
    let card;
    // Shuffle the game board icons
    let cardsIconsArr = shuffle(CARDS_ICONS);

    if(elemCard != null && cardsIconsArr != null && (elemCard.length === cardsIconsArr.length)) {

        // Load the card array
        for(let i = 0; i< cardsIconsArr.length; i++) {
            // Reset any added classes & add tShe updated one
            elemCard[i].className = `${CARD_ICON_BASE_CLASSES} ${ScardsIconsArr[i]}`;
            */


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

    /*shuffles the array*/
    myShuffledCards = shuffle(iconsArray);

    /*updates the HTML from the old to the new card so the shuffled array is displayed*/
    for (let i = 0; i < cards.length; i++) {
        const oldCard = document.getElementsByClassName("card")[i];
        const updatedHtml = myShuffledCards[i];
        newCard = oldCard.querySelector("i").className = updatedHtml;

        /*adds an event listener to each card*/
        cards[i].addEventListener("click", function() {
            console.log("click! " + i);

            /*const flippedCard = cards;
            flippedCard.onclick = console.log("2nd click");
            flippedCard.classList.toggle("open show");
            console.log(flippedCard);*/

            const flippedCard = document.getElementsByClassName("card")[i];
            const addClasses = flippedCard.classList;
            addClasses.add("open", "show");
            console.log(flippedCard);
        });
    }
}

/*this function adds the open & show classes when a card is clicked the first time*/
function flipCard() {
    /*    const flippedCard = document.querySelectorAll(".card");
        flippedCard.onclick =
    */

}

/*the restart button re-shuffles the card if the user wants to start over*/
const restartButton = document.getElementsByClassName("restart")[0];
restartButton.addEventListener("click", function() {
    setCardEvents();
    console.log("restart?");
    /*reset click listeners*/
});

/*runs the function that updates the HTML and sets an event listener*/
setCardEvents();
