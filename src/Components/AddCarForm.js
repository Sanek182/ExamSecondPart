import React, { useState } from 'react';

function AddCarForm ({ onAdd }) {
    const [car, setCar] = useState({ name: '', price: '', img: '' });

    const handleAdd = (e) => {
        e.preventDefault();
        onAdd(car);
        setCar({ name: '', price: '', img: '' });
    };

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    return (
        <div className="AddCarForm">
          <h3>Add New Car</h3>
          <form onSubmit={handleAdd}>
            <input name="name" value={car.name} onChange={handleChange} placeholder="Car name" required />
            <input name="price" value={car.price} onChange={handleChange} placeholder="Car price" required />
            <input name="img" value={car.img} onChange={handleChange} placeholder="Car image URL" required />
            <button type="submit">Add</button>
          </form>
        </div>
    );
}

export default AddCarForm;
