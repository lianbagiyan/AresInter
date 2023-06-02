import HeaderLogo from '../../images/company-logo.png'
import CountryFlag from '../../images/flag.svg'
import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <img src={HeaderLogo} alt="header" />
      <span className="header__menu-item">HOMEPAGE</span>
      <img src={CountryFlag} alt="flag" />
    </header>
  )
}

export default Header
