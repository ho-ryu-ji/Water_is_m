import React from 'react';
import logo from '../imgs/logo_white.JPG';
import "../styles/Header.css";

export default function App(props) {
	return (
		<header className="App-header">
			<div className="logo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		</header>
	);
}