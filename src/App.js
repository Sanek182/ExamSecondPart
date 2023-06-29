import React, { useState } from 'react';
import './App.css';
import CarsList from './Components/CarsList';
import CarDetails from './Components/CarDetails';

function App() {
  const [cars, setCars] = useState([
    { name: 'Ferrari', price: '$70', img: 
    'https://bucket.carmodel.com/images/cm-lg/155645_13-7.jpg' },
    { name: 'Ford', price: '$65', img: 
    'https://bucket.carmodel.com/images/cm-lg/168919-1.jpg' },
    { name: 'Cadillac', price: '$30', img: 
    'https://bucket.carmodel.com/images/cm-lg/168913-1.jpg' }
  ]);

  const [selectedCar, setSelectedCar] = useState(undefined);

  const addCar = (car) => {
    setCars([ ...cars, car ]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Toy Cars Management</h2>
      </div>
      <div className="App-sections">
        <CarsList items={cars} onClick={setSelectedCar} />
        {selectedCar && <CarDetails item={selectedCar} />}
      </div>
    </div>
  );
}

export default App;