import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
	// Setting this.state.characters to the characters json array
	state = {
		characters,
		clickedArray: [],
		topScore: 0,
		score: 0,
		message: "",
		// shakeit: "false"
	};
	
}
export default App;
