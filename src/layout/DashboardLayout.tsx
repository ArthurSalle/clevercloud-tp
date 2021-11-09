import { useEffect, useState } from 'react';

import CartPanel from '../components/organisms/CartPanel';
import FlavorPanel from '../components/organisms/FlavorPanel';
import VariantPanel from '../components/organisms/VariantPanel';
import { Flavor, Instances } from '../types/ApiResponses';

export type Cart = {
  lang: string;
  items: Flavor[];
};

const Dashboard = () => {
  const [instances, setInstances] = useState<Instances[]>([]);
  const [variantName, setVariantName] = useState('');
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    fetch('https://api.clever-cloud.com/v2/products/instances')
      .then((res) => {
        return res.json();
      })
      .then((instances) => setInstances(instances));
  }, [setInstances]);

  return (
    <div className="dashboard">
      <VariantPanel instances={instances} setVariantName={setVariantName} />
      <FlavorPanel instances={instances} variantName={variantName} setCart={setCart} />
      <CartPanel cart={cart} variantName={variantName} setCart={setCart} />
    </div>
  );
};

export default Dashboard;
