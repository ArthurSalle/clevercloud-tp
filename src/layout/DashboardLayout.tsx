import { useEffect, useState } from 'react';

import VariantPanel from '../components/organisms/VariantPanel';
import { Instances } from '../types/ApiResponses';

const Dashboard = () => {
  const [instances, setInstances] = useState<Instances[]>([]);

  useEffect(() => {
    fetch('https://api.clever-cloud.com/v2/products/instances')
      .then((res) => {
        return res.json();
      })
      .then((instances) => setInstances(instances));
  }, [setInstances]);

  return (
    <div>
      <VariantPanel instances={instances} />
    </div>
  );
};

export default Dashboard;
