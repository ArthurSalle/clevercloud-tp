import { Dispatch, SetStateAction } from 'react';

import { Instances } from '../../types/ApiResponses';
import Button from '../atoms/Button';

type InstancesProps = {
  instances: Instances[];
  setVariantName: Dispatch<SetStateAction<string>>;
};

const VariantPanel = ({ instances, setVariantName }: InstancesProps) => {
  return (
    <div className="panel">
      <h2>Choose a variant</h2>

      {instances.map((el) => (
        <div key={el.variant.id} className="panel-content">
          <div className="panel-img">
            <img src={el.variant.logo} alt="logo" />
          </div>
          <p>{el.variant.name}</p>
          <Button
            variant="primary"
            onClick={() => {
              setVariantName(el.variant.name);
            }}>
            Select
          </Button>
        </div>
      ))}
    </div>
  );
};

export default VariantPanel;
