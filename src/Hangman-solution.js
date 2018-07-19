import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";

class Hangman extends Component {
  /* by default, allow 6 guesses and use provided gallows images. */

  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  state = { nWrong: 0, guessed: new Set(), answer: randomWord() };

  /* reset: restart game from beginning. */

  reset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /* guessedWord: show current-state of word:
       if guessed letters are {a,p,e}, show "app_e" for "apple"
  */

  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /* handleGuest: handle a guessed letter:
      - add to guessed letters
      - if not in answer, increase number-wrong guesses
  */

  handleGuess(ltr) {
    this.setState({
      guessed: this.state.guessed.add(ltr),
      nWrong: this.state.nWrong + (this.state.answer.includes(ltr) ? 0 : 1),
    });
  }

  /* buttons: return array of letter buttons to render */

  buttons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={evt => this.handleGuess(evt.target.value)}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /* render: render game */

  render() {
    return (
      <div className="Hangman">
        <img src={this.props.images[this.state.nWrong]} />

        <p>Wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">{this.guessedWord()}</p>

        <p>
          {this.state.nWrong < this.props.maxWrong
            ? this.buttons()
            : `You lose: ${this.state.answer}`}
        </p>

        <button onClick={evt => this.reset()}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
