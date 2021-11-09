import { Dispatch, SetStateAction } from 'react';

import { Cart } from '../../layout/DashboardLayout';
import Button from '../atoms/Button';

type CartPanelProps = {
  cart: Cart[];
  variantName: string;
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const CartPanel = ({ cart, setCart }: CartPanelProps) => {
  // quand on click sur delete
  // Ca trouve le Cart qui a le bon language
  // ensuite tu filtres les items pour ne pas retourner la flavor cliker
  // tu regarfes si items.length === 0, si c'est le cas c'est que c'est vide
  // donc il faut trouver l'index (findIndex()) de l'objet Cart qui correspond au langage, et le slicer
  // tu retournes ton state

  return (
    <div className="cart-panel">
      <div className="cart-cta">
        <h2 className="cart-title">Cart</h2>
        <Button variant="secondary" onClick={() => setCart([])}>
          Empty Cart
        </Button>
      </div>

      {cart.map((cartFlavor) => (
        <div key={cartFlavor.lang}>
          <h3>{cartFlavor.lang}</h3>
          <ul>
            {cartFlavor.items.map((item) => (
              <li key={item.name}>
                {item.name} : {item.mem} GO
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartPanel;
