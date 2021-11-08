import { Instances } from '../../types/ApiResponses';

type InstancesProps = {
  instances: Instances[];
};

const VariantPanel = ({ instances }: InstancesProps) => {
  return (
    <div className="panel">
      <h2>Choose a variant</h2>
      {instances.map((el) => (
        <div key={el.variant.id} className="panel-content">
          <div className="panel-img">
            <img src={el.variant.logo} alt="logo" />
          </div>
          <p>{el.variant.name}</p>
        </div>
      ))}
    </div>
  );
};

export default VariantPanel;
