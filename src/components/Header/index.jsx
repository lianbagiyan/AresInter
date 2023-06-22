import { useState } from "react";
import HeaderLogo from "../../images/company-logo.png";
import CountryFlag from "../../images/flag.svg";
import LoginIcon from "../../images/login-icon.svg";
import TerminalCheckout from "../../images/terminal-checkout.svg";
import Control from "../../images/control-icon.svg";
import MatchSearch from "../../images/match-search..svg";
import TicketSearch from "../../images/ticket-search.svg";
import Home from "../../images/home.svg";
import BetHistory from "../../images/bet-history.svg";
import "./style.scss";

const menuItems = [
    {
        id: 0,
        name: !!0 ? "EDITOR" : "HOMEPAGE",
    },
    {
        id: 1,
        name: "LIVE BETS",
    },
    {
        id: 2,
        name: "SPORTS",
    },
    {
        id: 3,
        name: "HIGHLIGHTS",
    },
    {
        id: 4,
        name: "TOP MATCHES",
    },
];

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <header className="header">
            <img src={HeaderLogo} alt="header" className="header__logo" />
            <div className="header__menu">
                {menuItems.map((item, i) => (
                    <span
                        key={i}
                        className={`header__menu__item ${
                            activeIndex === i ? "header__menu__item-active" : ""
                        }`}
                        onClick={() => {
                            setActiveIndex(i);
                        }}
                    >
            {item.name}
          </span>
                ))}
            </div>
            <div className="header__controller">
                <div className="header__controller__btns">
                    <div className="header__controller__block">
                        <img src={MatchSearch} alt="match-search" />
                    </div>
                    <div className="header__controller__block">
                        <img src={TicketSearch} alt="ticket-search" />
                    </div>
                    {!!0 && (
                        <div className="header__controller__block">
                            <img src={BetHistory} alt="bet-history" />
                        </div>
                    )}
                    <div className="header__controller__block header__controller__acc">
                        {!!0 && (
                            <span className="header__controller__acc__elem">
                800,000.00CFD
              </span>
                        )}
                        <span className="header__controller__acc__elem">testuser12</span>
                        {!!1 && (
                            <img
                                src={Home}
                                alt="home"
                                className="header__controller__acc__elem"
                            />
                        )}
                    </div>
                    {!!1 && (
                        <div className="header__controller__block header__controller__block__withdraw">
                            WITHDRAWAL
                        </div>
                    )}
                    <div className="header__controller__block">
                        <img src={CountryFlag} alt="flag" />
                    </div>
                </div>
                <div className="header__controller__login">
                    {!!1 && (
                        <div className="header__controller__block header__controller__block__card-login">
                            CARD LOGIN
                        </div>
                    )}
                    <div className="header__controller__block">
                        <img src={Control} alt="control" />
                    </div>
                    <div className="header__controller__block">
                        <img src={TerminalCheckout} alt="checkout" />
                    </div>
                    <div className="header__controller__block header__controller__block__login ">
                        <img src={LoginIcon} alt="login" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
