import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
import "../styles/Header.css";
function Header() {
    return (
        <header style={headerStyle}>
            <div style={headerDiv}>
                <img src="./assets/logo.png" alt="Logo" className="logo" style={logoStyle} />
                <SearchBar style={searchBarStyle} />
            </div>
            <div className="header__navbar" style={headerNavBarStyle}>
                <ul style={headerNavBarUlStyle}>
                    <li style={{ marginRight: '61px' }}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ALL</Link></li>
                    <li><Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>MY PHOTOS</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header

const headerStyle = {
    backgroundImage: 'url("./assets/headerBackground.jpg")',
    width: '100%',
    height: '230px',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Esto empuja el navbar hacia abajo
}

const headerDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const logoStyle = {
    width: '116px',
    height: '116px',
    marginLeft: '20px',
    marginTop: '20px',
}

const searchBarStyle = {
    marginTop: '20px'
}

const headerNavBarStyle = {
    display: 'flex',
    justifyContent: 'center', // Centra el navbar horizontalmente
    cursor: 'pointer',
}

const headerNavBarUlStyle = {
    listStyleType: 'none',
    display: 'flex',
    padding: '0',
    color: '#FFFFFF',
    fontSize: '24px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
}
