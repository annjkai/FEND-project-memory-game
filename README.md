# Memory Game Project

## Table of Contents

* [Game Description](#description)
* [How to Play](#play)
* [To Do](#todo)

## Game Description

Description goes here.

## How to Play

Instructions go here.

## To Do

- Update styling
    - Background
    - Gradient
    - Enlarge card images

## Pseudo-code

For every user click, the game needs to:
    - react to a click event CHECK
    - store the click and add it to a counter (numbers array)
    - "flip" the card to display blue background and icon

For the click array
    - if the number is <=10, do nothing
    - if the number is >10 && <=15, turn first star white
    - if the number is >15, turn first & second star white

For the cards
    - when the first card is clicked, add classes `show` & `open`
    - then do nothing (leave card with classes)
    - when the second card is clicked, add classes `show` & `open`
    - if the second card matches the first (identical), add class `match` and leave cards displayed
    -> these cards should be removed from object
    -> cards "match" when class === class, as in `fa-leaf` === `fa-leaf`
    - if the second card doesn't match the first, remove classes `show` & `open`
    - return to previous "click state", treat next pair as first and second

For game
    - once all cards have been removed from array, display alert screen with  time, stars,
    message, option to reshuffle

For reshuffle button
    -reset game board to its original state but with cards randomized across the board
    - this needs to happen on every load/refresh as well

## Images

Seigaiha/Japanese Asanoha by [Olga Libby](http://olgalibby.com/), sourced from [Subtle Patterns](www.subtlepatterns.com)
