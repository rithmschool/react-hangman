=======
Hangman
=======

A React hangman game exercise.


Task One: # Wrong Guesses
-------------------------

Above the currently-guessed word, we'd like to show the number
of wrong guesses, like "Number wrong: 3". Add this.

Task Two: End Game on Loss
--------------------------

The game only comes (by default) with 6 gallows images and therefore
should only allow six wrong guesses. However, it allows players to keep making
guesses after this (and there's a bug, in that the gallows images
disappears after there are too many wrong).

Change it so that, after six wrong guesses, it no longer shows the
button area and, instead, shows the message "You lose" and the
correct word.

Do this without hardcoding "6" in as the number of guesses -- instead,
use the property for maxGuesses.

Task Three: Use a Random Word
-----------------------------

The game right now always uses the word "apple" as the secret word.
There's a file, ``words.js``, with a list of words and a function
to return a random word. Incorporate this so that the game uses
this to choose a secret word.

Task Four: Add "Restart" Button
-------------------------------

Add a button at the button that will restart the game. This should
pick a new random word and reset the guessed list and number of 
wrong guesses.
