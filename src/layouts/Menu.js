import React from 'react';
import "../styles/layouts/Menu.css";

export default function Menu() {
  return (
    <>
      <a className="menu">
        <span className="menu__line menu__line--top"></span>
        <span className="menu__line menu__line--center"></span>
        <span className="menu__line menu__line--bottom"></span>
      </a>
      <nav className="gnav">
        <div className="gnav__wrap">
          <ul className="gnav__menu">
            <li className="gnav__menu__item"><a href="">About</a></li>
            <li className="gnav__menu__item"><a href="">Look</a></li>
            <li className="gnav__menu__item"><a href="">Shop</a></li>
            <li className="gnav__menu__item"><a href="">Contact</a></li>
            <li className="gnav__menu__item"><a href="">Waterism Times</a></li>
          </ul>
        </div>
      </nav>
      {/* <div class="hero"></div> */}
    </>
  );
}