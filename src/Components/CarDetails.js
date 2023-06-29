import React from 'react';

function CarDetails ({ item }) {
    return (
        <div className="CarDetails">
            <h3>Car Details</h3>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
        </div>
      );
}

export default CarDetails;