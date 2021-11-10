import { Cart as CartType } from '../../App';
import logo from '../../assets/logo.png';
import Cart from '../molecules/Cart';

type HeaderProps = {
  cart: CartType[];
};

const Header = ({ cart }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-img">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="header-cart">
        <Cart cart={cart} />
      </div>
    </header>
  );
};

export default Header;
