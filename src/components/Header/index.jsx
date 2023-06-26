import HeaderLogo from "../../images/company-logo.png";
import Menu from "../Menu";
import Button from "../Button";
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
  return (
    <header className="header">
      <img src={HeaderLogo} alt="header" className="header__logo" />
      <div>
        <Menu items={menuItems} />
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
          <div className="header__controller__block">
            <i className="icon-bet-history"></i>
          </div>
          <div className="header__controller__block header__controller__acc">
            <span className="header__controller__acc__elem">800,000.00CFD</span>
            <span className="header__controller__acc__elem">testuser12</span>
            <i className="icon-home header__controller__acc__elem"></i>
          </div>
          <Button
            text="WITHDRAWAL"
            width={108}
            background="var(--green-gradient)"
          />
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
          <Button
            text="CARD LOGIN"
            width={108}
            background="var(--blue-gradient)"
          />
          <div className="header__controller__block">
            <i className="icon-control-icon"></i>
          </div>
          <div className="header__controller__block">
            <i className="icon-terminal-checkout"></i>
          </div>
          <Button
            icon="icon-login-icon"
            width={44}
            background="var(--red-gradient)"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
