import React, { useState } from 'react';
import './App.css';
import CarsList from './Components/CarsList';

function App() {
  const [cars, setCars] = useState([
    { name: 'Ferrari', price: '$70', img: 
    'https://www.carmodel.com/ru/burago/bu16912r/1-18/ferrari/daytona-sp3-closed-roof-2022-full-exclusive-carmodel/155645' },
    { name: 'Ford', price: '$65', img: 
    'https://www.carmodel.com/ru/autoworld/amm1290-06/1-18/ford-usa/mustang-shelby-gt500-2-2-coupe-1969/168919' },
    { name: 'Cadillac', price: '$30', img: 
    'https://www.carmodel.com/ru/autoworld/aw314/1-18/cadillac/phaeton-v16-cabriolet-closed-1932/168913' }
  ]);

  const [selectedCar, setSelectedCar] = useState(undefined);

  const addCar = (car) => {
    setCars([ ...cars, car ]);
  };

  return (
    <div className="App">
      <div className="App-header">Toy Cars Management</div>
      <div className="App-sections">
        <CarsList items={cars} onClick={setSelectedCar} />
      </div>
    </div>
  );
}

export default App;