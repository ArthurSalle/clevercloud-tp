import { Cart } from '../../layout/DashboardLayout';

type CartPanelProps = {
  cart: Cart[];
};

const CartPanel = ({ cart }: CartPanelProps) => {
  console.log(cart);
  // quand on click sur delete
  // Ca trouve le Cart qui a le bon language
  // ensuite tu filtres les items pour ne pas retourner la flavor cliker
  // tu regarfes si items.length === 0, si c'est le cas c'est que c'est vide
  // donc il faut trouver l'index (findIndex()) de l'objet Cart qui correspond au langage, et le slicer
  // tu retournes ton state
  return (
    <div className="cart-panel">
      <h2>Cart</h2>
      {/* {cart.map((el) => (
        <p key={el.name}>{el.name}</p>
      ))} */}
      {cart.map((cartFlavor) => (
        <div key={cartFlavor.lang}>
          <p>{cartFlavor.lang}</p>
          <ul>
            {cartFlavor.items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartPanel;
