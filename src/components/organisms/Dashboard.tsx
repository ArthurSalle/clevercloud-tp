import { useEffect, useState } from 'react';

import { Instances } from '../../types/ApiResponses';

const Dashboard = () => {
  const [instances, setInstances] = useState<Instances[]>([]);

  useEffect(() => {
    fetch('https://api.clever-cloud.com/v2/products/instances')
      .then((res) => {
        return res.json();
      })
      .then((instances) => setInstances(instances));
  }, [setInstances]);

  console.log(instances);

  return <div></div>;
};

export default Dashboard;
