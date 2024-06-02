import { useEffect, useState } from "react";
import "./App.css";
import SignUpPage from "./components/SignUp/SignUpPage";
import loadingGif  from "./assets/Gif.gif";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <img src={loadingGif} alt="dancing parrot" />
        </div>
      ) : (
        <>
          <div className="layout">
            <header className="header">
              <div className="header__info">
                <a href="#" className="header__logo">
                  <img src="./img/logo.svg" alt="" />
                </a>
                <nav className="header__nav">
                  <a href="#games" className="header__items">
                    Games
                  </a>
                  <a href="#contacts" className="header__items">
                    Contact us
                  </a>
                  <a href="#rules" className="header__items">
                    Terms of Use
                  </a>
                  <a href="#" className="header__items">
                    About
                  </a>
                </nav>
              </div>
              <div className="header__container">
                <div className="header__signup">
                  <a href="#" className="header__text" onClick={toggleModal}>
                    Sign up
                  </a>
                  {isOpen && <SignUpPage />}

                  <button className="header__button">Log in</button>
                </div>
                <div className="header__burger">
                  <input id="menu-toggle" type="checkbox" />
                  <label
                    className="menu-button-container"
                    htmlFor="menu-toggle"
                  >
                    <div className="menu-button"></div>
                  </label>
                  <ul className="menu">
                    <li>
                      <a href="#games">Games</a>
                    </li>
                    <li>
                      <a href="#contacts">Contact us</a>
                    </li>
                    <li>
                      <a href="#rules">Terms of Use</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <main className="main">
              <section className="main__hero">
                <div className="main__top">
                  <h1 className="main__heading">
                    Awesome html5 games - NO MONEY!
                  </h1>
                  <p className="main__slogan">
                    Your perfect place to get some <br /> fun and excitement
                  </p>
                  <div className="main__buttons">
                    <button className="button__login">Log in</button>
                    <button className="button__play" onClick={toggleModal}>
                      Play
                    </button>
                  </div>
                </div>
                <div className="main__form">
                  <div className="form__top">
                    <h3 className="main__account">Create a free account now</h3>
                    <div className="form__desc">
                      <div className="form__about">
                        <img
                          src="./img/dice.png"
                          alt="dice"
                          className="form__img"
                        />
                        <p>
                          1000+ Games <br />
                          available
                        </p>
                      </div>
                      <div className="form__about">
                        <img
                          src="./img/slot.png"
                          alt="slots"
                          className="form__img"
                        />
                        <p>
                          New game <br />
                          Every week
                        </p>
                      </div>
                      <div className="form__about">
                        <img
                          src="./img/24h.png"
                          alt="24h"
                          className="form__img"
                        />
                        <p>
                          Support our <br />
                          users 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form__middle">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form__input"
                      placeholder="Firstname"
                    />
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form__input"
                      placeholder="Lastname"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form__input email"
                      placeholder="Email"
                    />
                    <button className="button__join">Join Now</button>
                  </div>
                  <div className="form__privacy">
                    <input
                      type="checkbox"
                      name="acception"
                      id="acception"
                      className="form__checkbox"
                    />
                    <label htmlFor="acception" className="form__acception">
                      I accept the
                      <pre> </pre>
                      <a href="#" className="form__acception">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                <div className="center__block">
                  <div id="games" className="center__title">
                    <h2 className="center__heading">Our Games</h2>
                    <p className="center__welcome">
                      Get Virtual Welcome bonus after Sign Up
                    </p>
                  </div>
                  <a href="#" className="center__link">
                    All games
                  </a>
                </div>
              </section>
              <div className="center__wrapper">
                <section className="center__space">
                  <div className="div4">
                    <div className="div1">
                      <div className="game__mini">
                        <img
                          src="./img/gametype.2813.jpg"
                          alt="Double Jackpot"
                          className="game__img"
                        />
                        <p className="game__title">Double Jackpot</p>
                        <p className="game__dev">NetentGames</p>
                      </div>
                      <div className="game__mini">
                        <img
                          src="./img/gametype.4298.jpg"
                          alt="All Aboard: Dynamite Dash"
                          className="game__img"
                        />
                        <p className="game__title">All Aboard: Dynam...</p>
                        <p className="game__dev">RushGameStudio</p>
                      </div>
                      <div className="game__mini">
                        <img
                          src="./img/gametype.4749.jpg"
                          alt="Book Of Tombs"
                          className="game__img"
                        />
                        <p className="game__title">Book Of Tombs</p>
                        <p className="game__dev">NetentGames</p>
                      </div>
                    </div>

                    <div className="div2">
                      <div className="game__mini">
                        <img
                          src="./img/gametype.4779.jpg"
                          alt="Rudolph’s Ride"
                          className="game__img"
                        />
                        <p className="game__title">Rudolph’s Ride</p>
                        <p className="game__dev">NetentGames</p>
                      </div>
                      <div className="game__mini">
                        <img
                          src="./img/gametype.5423.jpg"
                          alt="Starburst XXXtreme"
                          className="game__img"
                        />
                        <p className="game__title">Starburst XXXtreme</p>
                        <p className="game__dev">StarBurst Inc.</p>
                      </div>
                      <div className="game__mini">
                        <img
                          src="./img/gametype.1882.jpg"
                          alt="Black Diamond game"
                          className="game__img"
                        />
                        <p className="game__title">Black Diamond</p>
                        <p className="game__dev">RushGameStudio</p>
                      </div>
                    </div>
                  </div>
                  <div className="div5">
                    <div className="div3">
                      <div className="game__big-1">
                        <p className="game__title">
                          Dynamite Riches <br /> Megaways
                        </p>
                        <p className="game__desc">
                          Miners revealed a gain of €46,672 for Sandra M.! You
                          too, dynamite the reels of the Red Tiger Daily Jackpot
                          machines
                        </p>
                        <button className="game__big-button">Play now</button>
                      </div>
                      <div className="game__big-2">
                        <p className="game__title">
                          {" "}
                          Gator Gold Deluxe <br /> Gigablox
                        </p>
                        <p className="game__desc">
                          These swamps conceal many dangers but especially
                          precious treasures. Will you be able to find them?
                        </p>
                        <button className="game__big-button">Play now</button>
                      </div>
                    </div>
                    <div className="game__promo">
                      <img
                        src="./img/banner_promo.jpeg"
                        alt="Promo banner"
                        className="game__promo-img"
                      />
                      <div className="game__wrapper">
                        <div className="game__slogans">
                          <p className="game__title">
                            Our deals are not to be missed
                          </p>
                          <p className="game__dev">
                            Discover a wide range of weekly promotions
                          </p>
                        </div>
                        <button className="game__big-button">Read more</button>
                      </div>
                    </div>
                  </div>
                  <p className="center__attention">
                    * We don&apos;t offer opportunities to play for real money.
                    Our games are free demo. All games were invented for
                    entertainment purposes only and do not offer real money
                    prizes.
                  </p>
                </section>
                <section className="bottom">
                  <div className="bottom__contacts">
                    <div id="contacts" className="bottom__block">
                      <h3 className="bottom__title">Contact us</h3>
                      <p className="bottom__info">
                        If you have some questions, send us a message
                      </p>
                    </div>
                    <div className="bottom__inputs">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="input__name"
                        placeholder="Firstname"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input__email"
                        placeholder="Email"
                      />
                      <textarea
                        name="message"
                        id="message"
                        className="input__textarea"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <div className="bottom__wrap">
                      <div className="form__privacy">
                        <input
                          type="checkbox"
                          name="acception"
                          id="acception-two"
                          className="form__checkbox"
                        />
                        <label
                          htmlFor="acception-two"
                          className="form__acception"
                        >
                          I accept the
                          <pre> </pre>
                          <a href="#" className="form__acception">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <button className="bottom__button">Send</button>
                    </div>
                  </div>
                  <div className="bottom__image">
                    <img src="./img/image.png" alt="A fair bonus tower" />
                  </div>
                </section>
              </div>
            </main>
            <footer id="rules" className="footer">
              <p className="footer__links">
                <a href="#" className="footer__links">
                  Disclaimer
                </a>{" "}
                |{" "}
                <a href="#" className="footer__links">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="footer__links">
                  Terms of Conditions
                </a>
              </p>
              <p className="footer__attention">
                This site does not provide any form of online gambling and
                delivers information for entertainment and research purposes
                only. The games listed by Topwinningslots are intended for adult
                audience entertainment (underage visitors are restricted) and do
                not offer real money or prizes. Practicing online free games
                does not imply future success at &lsquo;real money&rsquo;
                gambling.
              </p>
              <hr className="footer__line" />
              <div className="footer__block">
                <p className="footer__text">
                  2022 | © Lorem Inc. All Rights Reserved
                </p>
                <div className="footer__medias">
                  <a href="https://twitter.com/">
                    <svg
                      width="15.999939"
                      height="12.994873"
                      viewBox="0 0 15.9999 12.9949"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Vector"
                        d="M14.35 3.23C14.36 3.38 14.36 3.52 14.36 3.66C14.36 8 11.06 12.99 5.03 12.99C3.17 12.99 1.45 12.45 0 11.52C0.26 11.55 0.51 11.56 0.79 11.56C2.32 11.56 3.73 11.04 4.86 10.16C3.42 10.13 2.21 9.18 1.79 7.88C2 7.91 2.2 7.93 2.41 7.93C2.71 7.93 3 7.89 3.27 7.82C1.77 7.52 0.64 6.2 0.64 4.6L0.64 4.56C1.08 4.81 1.59 4.96 2.13 4.98C1.24 4.39 0.67 3.39 0.67 2.25C0.67 1.64 0.83 1.08 1.11 0.59C2.73 2.58 5.15 3.88 7.87 4.03C7.82 3.78 7.79 3.53 7.79 3.27C7.79 1.47 9.25 0 11.07 0C12.02 0 12.87 0.39 13.47 1.03C14.21 0.89 14.92 0.61 15.55 0.24C15.3 1 14.79 1.64 14.11 2.05C14.77 1.97 15.41 1.79 15.99 1.54C15.55 2.19 14.99 2.77 14.35 3.23Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                  <a href="https://facebook.com/">
                    <svg
                      width="10.000000"
                      height="16.000000"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <clipPath id="clip12_223">
                          <rect
                            id="fa-brands:facebook-f"
                            width="10.000000"
                            height="16.000000"
                            fill="white"
                            fillOpacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        id="fa-brands:facebook-f"
                        width="10.000000"
                        height="16.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <g clipPath="url(#clip12_223)">
                        <path
                          id="Vector"
                          d="M8.72 9L9.16 6.1L6.38 6.1L6.38 4.22C6.38 3.43 6.77 2.66 8.02 2.66L9.28 2.66L9.28 0.19C9.28 0.19 8.13 0 7.04 0C4.75 0 3.25 1.38 3.25 3.89L3.25 6.1L0.71 6.1L0.71 9L3.25 9L3.25 16L6.38 16L6.38 9L8.72 9Z"
                          fill="#FFFFFF"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="http://instagram.com/">
                    <svg
                      width="14.000000"
                      height="16.000000"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <clipPath id="clip12_221">
                          <rect
                            id="fa6-brands:instagram"
                            width="14.000000"
                            height="16.000000"
                            fill="white"
                            fillOpacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        id="fa6-brands:instagram"
                        width="14.000000"
                        height="16.000000"
                        fill="#FFFFFF"
                        fillOpacity="0"
                      />
                      <g clipPath="url(#clip12_221)">
                        <path
                          id="Vector"
                          d="M7 4.4C5.01 4.4 3.41 6 3.41 7.99C3.41 9.98 5.01 11.58 7 11.58C8.99 11.58 10.59 9.98 10.59 7.99C10.59 6 8.99 4.4 7 4.4ZM7 10.33C5.71 10.33 4.66 9.28 4.66 7.99C4.66 6.7 5.71 5.66 7 5.66C8.29 5.66 9.33 6.7 9.33 7.99C9.33 9.28 8.28 10.33 7 10.33ZM11.57 4.25C11.57 4.72 11.2 5.09 10.74 5.09C10.27 5.09 9.9 4.72 9.9 4.25C9.9 3.79 10.27 3.42 10.74 3.42C11.2 3.42 11.57 3.79 11.57 4.25ZM13.95 5.1C13.9 3.98 13.64 2.99 12.82 2.17C12 1.35 11.01 1.09 9.89 1.04C8.73 0.97 5.26 0.97 4.11 1.04C2.99 1.09 2 1.35 1.17 2.17C0.35 2.99 0.1 3.98 0.04 5.1C-0.02 6.26 -0.02 9.72 0.04 10.88C0.1 12 0.35 13 1.17 13.81C2 14.63 2.99 14.89 4.11 14.95C5.26 15.01 8.73 15.01 9.89 14.95C11.01 14.89 12 14.64 12.82 13.81C13.64 13 13.9 12 13.95 10.88C14.02 9.72 14.02 6.26 13.95 5.1ZM12.46 12.12C12.21 12.73 11.74 13.2 11.13 13.45C10.2 13.82 8.02 13.73 7 13.73C5.98 13.73 3.79 13.81 2.87 13.45C2.26 13.21 1.79 12.74 1.54 12.12C1.17 11.2 1.26 9.01 1.26 7.99C1.26 6.97 1.18 4.78 1.54 3.86C1.78 3.25 2.25 2.78 2.87 2.53C3.79 2.17 5.98 2.25 7 2.25C8.02 2.25 10.21 2.17 11.13 2.53C11.74 2.78 12.21 3.25 12.46 3.86C12.82 4.79 12.74 6.97 12.74 7.99C12.74 9.01 12.82 11.2 12.46 12.12Z"
                          fill="#FFFFFF"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
