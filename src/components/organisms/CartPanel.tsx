import { Dispatch, SetStateAction } from 'react';

import { Cart } from '../../App';
import Button from '../atoms/Button';

type CartPanelProps = {
  cart: Cart[];
  variantName: string;
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const CartPanel = ({ cart, setCart }: CartPanelProps) => {
  return (
    <div className="cart-panel">
      <div className="cart-cta">
        <h2 className="cart-title">Cart</h2>
        {cart.length !== 0 ? (
          <Button variant="secondary" onClick={() => setCart([])}>
            Empty Cart
          </Button>
        ) : (
          <span>Cart is empty</span>
        )}
      </div>

      {cart.map((cartFlavor) => (
        <div key={cartFlavor.lang} className="cart-content">
          <h3>{cartFlavor.lang}</h3>
          <ul>
            {cartFlavor.items.map((item) => (
              <div key={item.name} className="cart-items">
                <li>
                  {item.name} : {item.mem} Go, price : {''}
                  {new Intl.NumberFormat('fr-FR', {
                    currency: 'EUR',
                    style: 'currency',
                  }).format(item.price)}
                </li>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setCart((prevState) => {
                      const newState = prevState.filter((cart) => {
                        if (cart.lang === cartFlavor.lang) {
                          cart.items = cart.items.filter(
                            (cartItem) => item.name !== cartItem.name,
                          );

                          if (cart.items.length === 0) {
                            return false;
                          }
                          return cart;
                        }
                        return cart;
                      });
                      return newState;
                    });
                  }}>
                  Remove
                </Button>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartPanel;
