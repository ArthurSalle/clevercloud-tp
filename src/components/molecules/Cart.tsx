import { Cart as CartType } from '../../App';
import cartLogo from '../../assets/shopping-cart.png';

type CartProps = {
  cart: CartType[];
};

const Cart = ({ cart }: CartProps) => {
  const totalPrice = cart.reduce((acc, currentValue) => {
    return (
      acc +
      currentValue.items.reduce((iAcc, iCurrentValue) => {
        return iAcc + iCurrentValue.price;
      }, 0)
    );
  }, 0);

  return (
    <div className="cart">
      {new Intl.NumberFormat('fr-FR', {
        currency: 'EUR',
        style: 'currency',
      }).format(totalPrice)}
      <img src={cartLogo} alt="cart" />
    </div>
  );
};

export default Cart;
