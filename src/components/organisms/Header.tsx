import logo from '../../assets/logo.png';
import Cart from '../atoms/Cart';

const Header = () => {
  return (
    <header className="header">
      <div className="header-img">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="header-cart">
        <Cart />
      </div>
    </header>
  );
};

export default Header;
