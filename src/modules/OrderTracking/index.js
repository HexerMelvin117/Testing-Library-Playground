import React, { useState } from 'react';
import WitchersInput from '../../components/WitchersInput';

const OrderTrackingView = () => {
  const [counter, useCounter] = useState(0);

  return (
    <>
      <h1 className="mein-class">{counter}</h1>
      <WitchersInput />
    </>
  );
};
