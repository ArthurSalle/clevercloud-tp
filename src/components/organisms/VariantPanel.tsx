import { Dispatch, SetStateAction } from 'react';

import { Instances } from '../../types/ApiResponses';
import Button from '../atoms/Button';

type InstancesProps = {
  instances: Instances[];
  setVariantName: Dispatch<SetStateAction<string>>;
};

const VariantPanel = ({ instances, setVariantName }: InstancesProps) => {
  return (
    <div className="variant-panel">
      <h2 className="variant-title">Choose a variant</h2>

      {instances.map((el) => (
        <div key={el.variant.id} className="variant">
          <div className="variant-content">
            <img className="variant-content-img" src={el.variant.logo} alt="logo" />
            <p className="variant-content-text">{el.variant.name}</p>
          </div>
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
