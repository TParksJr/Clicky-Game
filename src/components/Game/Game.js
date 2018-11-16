import React, { Component } from 'react';
import './Game.css'
import characters from '../../characters';
import CharacterCard from '../CharacterCard';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            topScore: 0,
            characters,
            clicked: []
        };
    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        let newScore = this.state.score + 1;
        this.setState({
            score: newScore,
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }
        if (newScore === 12) {
            alert("You win!");
        }
        this.handleShuffle(this.state.characters);
    };

    handleReset = () => {
        this.setState({
            score: 0,
            topScore: this.state.topScore,
            clicked: []
        });
        this.handleShuffle(this.state.characters);
    };

    handleShuffle = characters => {
        let newCharacters = characters.sort(() => 0.5 - Math.random());
        return newCharacters;
    };

    render() {
        return (
            <div className="container m-3">
                <div className="text-center">
                    <h3>Current Score: {this.state.score} | Top Score: {this.state.topScore}</h3>
                </div>
                <br></br>
                <div className="container gameContainer">
                    {this.state.characters.map(character => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            image={character.image}
                            clicked={character.clicked}
                            handleClick={this.handleClick}
                            handleShuffle={this.handleShuffle}
                            handleScore={this.handleScore}
                            handleTopScore={this.handleTopScore}
                        />
                    ))
                    }
                </div>
            </div>
        );
    }

}

export default Game;
