import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
	state = {
		characters,
		clickedArray: [],
		topScore: 0,
		score: 0,
		cardWaggle: "false",
		message: ""
	};

	clickCharacter = id => {
		const shuffledArray = this.shuffleArray(characters);
		this.setState({ characters: shuffledArray });
		if (this.state.clickedArray.includes(id)) {
			this.setState({ score: 0, clickedArray: [], message: "Incorrect, Game Over! Click an image to start again!", cardWaggle: "true" });
		}
		else {
			this.setState({
				clickedArray: this.state.clickedArray.concat([id]),
				score: this.state.score + 1,
				cardWaggle: "false",
				message: "Correct"
			});
		}
		if (this.state.score > this.state.topScore) {
			this.setState({ topScore: this.state.score });
		}
	}
	shuffleArray = (picturesArray) => {
		for (let i = picturesArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
		}
		return picturesArray;
	}
	render() {
		return (
			<div className="App">
				<header>
					<div className="jumbotron text-center">
						<h2>GAME OF THRONES MEMORY GAME</h2>
					</div>
				
				</header>
				<h3 className="directions text-white text-center col-sm-10 offset-1">
					<p>Click on one character to begin. Remember who you click and try to get all 12 characters in a row without repeating a pick. Your high score will be logged.</p>
					<p className="score"><strong>Score: {this.state.score} | High Score: {this.state.topScore}</strong></p>
					<p className="message"><strong>{this.state.message}</strong></p>
				</h3>
				<Wrapper
					waggleWrapper = {this.state.cardWaggle}
					pictures = {this.state.characters.map(item => (
						<CharacterCard
							key={item.id}
							id={item.id}
							clickCharacter={this.clickCharacter}
							name={item.name}
							image={item.image}
						/>
					))}
				/>
			</div>
		);
	}

}
export default App;
