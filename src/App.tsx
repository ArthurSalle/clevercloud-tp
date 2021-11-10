import { useEffect, useState } from 'react';

import Header from './components/organisms/Header';
import DashboardLayout from './layout/DashboardLayout';
import { Flavor, Instances } from './types/ApiResponses';

export type Cart = {
  lang: string;
  items: Flavor[];
};

function App() {
  const [instances, setInstances] = useState<Instances[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    fetch('https://api.clever-cloud.com/v2/products/instances')
      .then((res) => {
        return res.json();
      })
      .then((instances) => setInstances(instances));
  }, [setInstances]);

  return (
    <div>
      <Header cart={cart} />
      <DashboardLayout cart={cart} setCart={setCart} instances={instances} />
    </div>
  );
}

export default App;
