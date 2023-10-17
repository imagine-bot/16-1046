// pages/pricing.tsx
import React, { useState } from 'react';
import Pricing from '../components/ui/Pricing';

const pricingTypes = [
  {
    type: 'Basic',
    price: 9,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    cta: 'Get Started',
  },
  {
    type: 'Pro',
    price: 19,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    cta: 'Go Pro',
  },
  {
    type: 'Enterprise',
    price: 49,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    cta: 'Contact Us',
  },
];

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleAnnual = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Pricing pricingTypes={pricingTypes} isAnnual={isAnnual} toggleAnnual={toggleAnnual} />
    </div>
  );
};

export default PricingPage;