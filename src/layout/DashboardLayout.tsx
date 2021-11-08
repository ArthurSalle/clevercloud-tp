import { useEffect, useState } from 'react';

import FlavorPanel from '../components/organisms/FlavorPanel';
import VariantPanel from '../components/organisms/VariantPanel';
import { Instances } from '../types/ApiResponses';

const Dashboard = () => {
  const [instances, setInstances] = useState<Instances[]>([]);
  const [variantName, setVariantName] = useState('');

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
      <FlavorPanel instances={instances} variantName={variantName} />
    </div>
  );
};

export default Dashboard;
