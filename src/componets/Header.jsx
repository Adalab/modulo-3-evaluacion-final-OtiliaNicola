import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
    <img src={logo} alt="Rick and Morty" className="header_logo" />
</header>
  )
}

export default Header;