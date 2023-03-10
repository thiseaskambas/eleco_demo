import React, { useState } from 'react';

const TestFilter = ({ testName, filters, setFilters }) => {
  const [checked, setChecked] = useState(filters.includes(testName));

  let nameToDisplay = '';
  switch (testName) {
    case 'acceleration':
      nameToDisplay = 'Accélération';
      break;
    case 'banana':
      nameToDisplay = 'Caisses à bananes';
      break;
    case 'braking':
      nameToDisplay = 'Freins';
      break;
    case 'range':
      nameToDisplay = 'Autonomie';
      break;
    case 'thousand':
      nameToDisplay = '1000km';
      break;
    case 'weight':
      nameToDisplay = 'Poids';
      break;
    default:
      nameToDisplay = testName;
  }

  const checkHandler = () => {
    setFilters((prev) => {
      return prev.includes(testName)
        ? prev.filter((filter) => filter !== testName)
        : [...prev, testName];
    });
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={testName}
        value={testName}
        className="mx-1"
        onChange={(e) => checkHandler(e)}
        checked={checked}
      />
      <label className="text-lg" htmlFor={testName}>
        {nameToDisplay}
      </label>
    </div>
  );
};

export default TestFilter;
