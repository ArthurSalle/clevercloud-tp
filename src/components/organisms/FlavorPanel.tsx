import { Dispatch, SetStateAction } from 'react';

import { Cart } from '../../App';
import { Instances } from '../../types/ApiResponses';
import Button from '../atoms/Button';

type FlavorPanelProps = {
  instances: Instances[];
  variantName: string;
  setCart: Dispatch<SetStateAction<Cart[]>>;
};

const FlavorPanel = ({ instances, variantName, setCart }: FlavorPanelProps) => {
  const flavorName = instances.find((el) => el.name === variantName);

  return (
    <div className="flavor-panel">
      <h2 className="flavor-title">Choose a flavor</h2>

      {flavorName && (
        <div className="flavor-selected">
          <img src={flavorName?.variant.logo} alt="variant" />
          <h3>{variantName}</h3>
        </div>
      )}

      {flavorName &&
        flavorName.flavors.map((el, k) => (
          <div className="flavor-content" key={el.name}>
            <div>
              <h3 className="flavor">{el.name}</h3>
              <p className="flavor">Mem : {el.mem} Go</p>
              <p className="flavor">CPUs : {el.cpus}</p>
              <p className="flavor">GPUs : {el.gpus}</p>
            </div>
            <div>
              <Button
                variant="primary"
                onClick={() => {
                  setCart((prevState) => {
                    const newFlavor = flavorName.flavors[k];

                    const isCartFlavor = prevState.find(
                      (prev) => prev.lang === variantName,
                    );

                    if (isCartFlavor) {
                      return prevState.map((cart) => {
                        if (cart.lang === isCartFlavor.lang) {
                          cart.items = cart.items.find(
                            (selectedFlavor) => selectedFlavor.name === newFlavor.name,
                          )
                            ? [...cart.items]
                            : [...cart.items, newFlavor];
                        }

                        return cart;
                      });
                    }

                    return [...prevState, { lang: variantName, items: [newFlavor] }];
                  });
                }}>
                Select
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FlavorPanel;
