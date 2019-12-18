import React, { Component } from 'react';
import logo from './logo.svg';
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
		message: "",
		shakeit: "false"
	};

	clickCharacter = id => {
		const shuffledArray = this.shuffleArray(characters);
		this.setState({ characters: shuffledArray });
		if (this.state.clickedArray.includes(id)) {
			this.setState({ score: 0, clickedArray: [], message: "Incorrect, Game Over! Click an image to start again!", shakeit: "true" });
		}
		else {
			this.setState({
				clickedArray: this.state.clickedArray.concat([id]),
				score: this.state.score + 1,
				message: "Correct, Keep Going!",
				shakeit: "false"
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
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React Clicky Game!!</h1>
				</header>
				<h3 className="App-intro">
					<p>Click on one character to begin. Remember who you click and try to get all 12 characters in a row without repeating a pick. Your high score will be logged.</p>
					<p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
					<p className="message"><strong>{this.state.message}</strong></p>
				</h3>
				<Wrapper
					shakeWrapper={this.state.shakeit}
					pictures=
					{this.state.characters.map(item => (
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
