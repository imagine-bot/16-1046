// components/ui/Pricing.tsx
import React from 'react';

interface PricingProps {
  pricingTypes: {
    type: string;
    price: number;
    features: string[];
    cta: string;
  }[];
  isAnnual: boolean;
  toggleAnnual: () => void;
}

const Pricing: React.FC<PricingProps> = ({ pricingTypes, isAnnual, toggleAnnual }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-10 rounded-lg">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div>
          <button onClick={toggleAnnual} className="px-4 py-2 rounded-lg bg-blue-500 text-white">
            {isAnnual ? 'Annual' : 'Monthly'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {pricingTypes.map((pricingType, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:border-blue-500 border-transparent border-2 transition-colors">
            <h3 className="text-xl font-bold mb-2">{pricingType.type}</h3>
            <p className="text-2xl font-bold mb-4">${pricingType.price}</p>
            <ul className="mb-4">
              {pricingType.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">{pricingType.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;