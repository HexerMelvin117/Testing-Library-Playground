import React, { useState } from 'react';
import './App.css';
import WitchersInput from './components/WitchersInput';
import OrderTrackingView from './modules/OrderTracking';

function App() {
  const [firstInputValue, setFirstInputValue] = useState('');

  return (
    <div className="App">
      <h1 className="counter">{firstInputValue}</h1>
      <WitchersInput
        label="Dinas Input"
        value={firstInputValue}
        setValue={setFirstInputValue}
      />
      <OrderTrackingView />
    </div>
  );
}

export default App;
