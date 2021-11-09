import { Dispatch, SetStateAction } from 'react';

import { Cart } from '../../layout/DashboardLayout';
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
              <p className="flavor">Mem : {el.mem} GO</p>
              <p className="flavor">CPUs : {el.cpus}</p>
              <p className="flavor">GPUs : {el.gpus}</p>
            </div>
            <div>
              <Button
                variant="primary"
                onClick={() => {
                  setCart((prevState) => {
                    const newFlavor = flavorName.flavors[k];

                    const isCartFlavor = prevState.some(
                      (prev) => prev.lang === variantName,
                    );

                    if (isCartFlavor) {
                      return prevState.map((cart) => {
                        const cloneCart = { ...cart };

                        if (cloneCart.lang === variantName) {
                          cloneCart.items = cloneCart.items.find(
                            (selectedFlavor) => selectedFlavor.name === newFlavor.name,
                          )
                            ? [...cloneCart.items]
                            : [...cloneCart.items, newFlavor];
                        }

                        return cloneCart;
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
