import React from 'react';
import logo from '../imgs/logo_white.JPG';
import Menu from './Menu';
import "../styles/layouts/Header.css";

export default function Header() {
	return (
		<header className="App-header">
			<div className="logo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Menu className="menu"/>
		</header>
	);
}