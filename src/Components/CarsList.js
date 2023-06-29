import React from 'react';

function CarsList ({ items, onClick }) {
    return (
        <div className="CarsList">
            <h2>Cars</h2>
            {items.map((car, index) => (
                <p key={index} onClick={() => onClick(car)}>
                {car.name}: {car.price}
                </p>
            ))}
        </div>
      );
};

export default CarsList;