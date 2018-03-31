/*
 * Array that holds all of the available card icon classes so they can be assigned or removed
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

//selects all cards via their class
const cards = document.querySelectorAll(".card");

//counts the move via overall clicks
let moveCounter = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
/* Provided shuffle function from http://stackoverflow.com/a/2450976
 * The function allows the card icons to be placed randomly across the board
 */
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

/* function to make each card clickable by selecting the class, looping through the
 * array and adding an eventListener to each element
 */
function setCardEvents() {
    //const cards = document.querySelectorAll(".card");

    // shuffles the array
    myShuffledCards = shuffle(iconsArray);

    // updates the HTML from the old to the new card so the shuffled array is displayed
    for (let x = 0; x < cards.length; x++) {
        const oldCard = document.getElementsByClassName("card")[x];
        const updatedHtml = myShuffledCards[x];
        newCard = oldCard.querySelector("i").className = updatedHtml;

        cards[x].addEventListener("click", cardEventListener);
    }


    // helper loop to log where each icon is
    for (let i = 0; i < iconsArray.length; i++) {
        const item = iconsArray[i];
        console.log(item);
    }

}

function cardEventListener(event) {
    const addClasses = this.classList;
    addClasses.add("open", "show");

    // setting intervals for timer
    if (isTimerSet != true) {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        isTimerSet = true;

        console.log("timer not true");

        startTimer();
    }

    isMatch();
}

// counts the clicks
let clickCounter = 0;

// function to check whether the cards are a pair
// first evaluate whether both cards are flipped open
function isMatch() {
    const openCard = document.getElementsByClassName("open show");
    console.log(openCard);

    // lets the click counter be updated
    clickCounter++;

    //accesses the first and second cards as they're clicked
    const firstCard = openCard[0];
    const secondCard = openCard[1];

    /* compares everything about the cards to each other (comparing the node would probably
     * not be the best solution, but because the whole card will be identical here, it's fine)
     */
    const matchedCards = firstCard.isEqualNode(secondCard);

    /* if the cards match, open & show classes are removed, match class is added
     * if the cards don't match, open & show classes are removed and the cards
     * can be accessed again
     */
    if (matchedCards) {
        firstCard.classList.remove("open", "show");
        secondCard.classList.remove("open", "show");
        firstCard.classList.add("match");
        secondCard.classList.add("match");

        clickCounter = 0;

    } else if (clickCounter === 2) {
        // closes both cards after a delay if they're not a match
        window.setTimeout(function() {
            firstCard.classList.remove("open", "show");
            secondCard.classList.remove("open", "show");
        }, 500);

        clickCounter = 0;

    } else {

    }

    // victory condition, stop timer, send alert
    const allCardsMatched = document.querySelectorAll(".match");
    if (allCardsMatched.length === 16){
        clearInterval(Interval);
        alert("congratz");
    }
}

// the restart button re-shuffles the card if the user wants to start over
const restartButton = document.getElementsByClassName("restart")[0];

//// TODO: fix bug if a card is clicked after all cards are matched
restartButton.addEventListener("click", function() {
    for (let x = 0; x < cards.length; x++) {
        const unflippedCard = document.getElementsByClassName("card")[x];
        const removedClass = unflippedCard.classList;
        removedClass.remove("match");
        cards[x].removeEventListener("click", cardEventListener);
    }
    setCardEvents();
    console.log("restart?");
});


/* timer, adapted from
 * https://www.cssscript.com/a-minimal-pure-javascript-stopwatch/
 */
let seconds = 0;
let minutes = 0;
const appendSeconds = document.getElementsByClassName("time-seconds")[0];
const appendMinutes = document.getElementsByClassName("time-minutes")[0];
let Interval;
let isTimerSet;

function startTimer() {
    seconds++;

    if (seconds > 59) {
        minutes++;
        seconds = 0;
        appendMinutes.innerHTML = minutes;
    }

    appendSeconds.innerHTML = seconds;
}

//runs the function that updates the HTML and sets an event listener
setCardEvents();
