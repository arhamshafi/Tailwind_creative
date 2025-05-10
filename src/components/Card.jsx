import React from 'react';

const PricingCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 flex flex-col items-center text-center space-y-4 mt-12 md:mt-6" style={{boxShadow:".1px .1px 10px 0px gray"}}>
      
      <h2 className="text-2xl font-bold">Starter</h2>
      <p className="text-gray-500 text-sm">
        Best option for personal use & for your next project.
      </p>

      <div className="text-4xl font-extrabold text-black flex items-baseline justify-center space-x-1">
        <span>$29</span>
        <span className="text-base font-medium text-gray-500">/month</span>
      </div>

      <ul className="space-y-2 text-gray-700 text-sm">
        <li className="flex items-center space-x-2">
          <span className="text-green-500 text-lg">✓</span>
          <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-500 text-lg">✓</span>
          <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-500 text-lg">✓</span>
          <span>Team size: <strong>1 developer</strong></span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-500 text-lg">✓</span>
          <span>Premium support: <strong>6 months</strong></span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-500 text-lg">✓</span>
          <span>Free updates: <strong>6 months</strong></span>
        </li>
      </ul>

      <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
        Get started
      </button>

    </div>
  );
};

export default PricingCard;
