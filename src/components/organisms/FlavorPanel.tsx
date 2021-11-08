import { Instances } from '../../types/ApiResponses';
import Button from '../atoms/Button';

type FlavorPanelProps = {
  instances: Instances[];
  variantName: string;
};

const FlavorPanel = ({ instances, variantName }: FlavorPanelProps) => {
  const flavorName = instances.find((el: any) => el.name === variantName);

  return (
    <div className="flavor-panel">
      <h2>{`Choose a ${variantName}'s flavor`}</h2>
      {/* <p>{variantName}</p> */}
      {flavorName &&
        flavorName.flavors.map((el: any) => (
          <div className="flavor-content" key={el.name}>
            <div>
              <p className="flavor">Name : {el.name}</p>
            </div>
            <div>
              <p className="flavor">Mem : {el.mem}</p>
            </div>
            <div>
              <p className="flavor">CPUs : {el.cpus}</p>
            </div>
            <div>
              <p className="flavor">GPUs : {el.gpus}</p>
            </div>
            <div>
              <Button variant="primary">Select</Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FlavorPanel;
