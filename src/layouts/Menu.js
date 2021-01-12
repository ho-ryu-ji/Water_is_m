import React from 'react';
import "../styles/layouts/Menu.css";

export default function Menu() {
  return (
    <header className="App-header-right">
			<div className="menu">
				<ul className="menu_lists">
          <li className="menu_lists_item"><a className="home">Home</a></li>
          <li className="menu_lists_item"><a className="about">About</a></li>
          <li className="menu_lists_item"><a className="waterismtimes">WaterismTimes</a></li>
          <li className="menu_lists_item"><a className="look">Look</a></li>
          <li className="menu_lists_item"><a className="shop">Shop</a></li>
          <li className="menu_lists_item"><a className="contact">Contact</a></li>
          <li className="menu_lists_item"><a className="login">Login</a></li>
        </ul>
			</div>
			<Menu className="menu"/>
		</header>
  );
}