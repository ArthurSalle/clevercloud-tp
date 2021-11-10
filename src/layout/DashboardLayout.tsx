import { Dispatch, SetStateAction, useState } from 'react';

import { Cart } from '../App';
import CartPanel from '../components/organisms/CartPanel';
import FlavorPanel from '../components/organisms/FlavorPanel';
import VariantPanel from '../components/organisms/VariantPanel';
import { Instances } from '../types/ApiResponses';

type DashboardProps = {
  instances: Instances[];
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const Dashboard = ({ instances, cart, setCart }: DashboardProps) => {
  const [variantName, setVariantName] = useState('');

  return (
    <div className="dashboard">
      <VariantPanel instances={instances} setVariantName={setVariantName} />
      <FlavorPanel instances={instances} variantName={variantName} setCart={setCart} />
      <CartPanel cart={cart} variantName={variantName} setCart={setCart} />
    </div>
  );
};

export default Dashboard;
