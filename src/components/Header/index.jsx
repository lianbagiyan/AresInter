import { useState } from "react";
import HeaderLogo from "../../images/company-logo.png";
import "./style.scss";
import "../../index.css";

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
            <i className="icon-match-search"></i>
          </div>
          <div className="header__controller__block">
            <i className="icon-ticket-search">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
            </i>
          </div>
          {!!1 && (
            <div className="header__controller__block">
              <i className="icon-bet-history"></i>
            </div>
          )}
          <div className="header__controller__block header__controller__acc">
            {!!1 && (
              <span className="header__controller__acc__elem">
                800,000.00CFD
              </span>
            )}
            <span className="header__controller__acc__elem">testuser12</span>
            {!!1 && <i className="icon-home header__controller__acc__elem"></i>}
          </div>
          {!!1 && (
            <div className="header__controller__block header__controller__block__withdraw">
              WITHDRAWAL
            </div>
          )}
          <div className="header__controller__block">
            <i className="icon-flag">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
              <span className="path6"></span>
              <span className="path7"></span>
            </i>
          </div>
        </div>
        <div className="header__controller__login">
          {!!1 && (
            <div className="header__controller__block header__controller__block__card-login">
              CARD LOGIN
            </div>
          )}
          <div className="header__controller__block">
            <i className="icon-control-icon"></i>
          </div>
          <div className="header__controller__block">
            <i className="icon-terminal-checkout"></i>
          </div>
          <div className="header__controller__block header__controller__block__login ">
            <i className="icon-login-icon"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
