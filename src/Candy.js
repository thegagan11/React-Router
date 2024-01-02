import React from 'react';
import { Link } from 'react-router-dom';


function Candy() {
    return (
        <div>
            <h2>Candy</h2>
            <p>Sweet and delightful treat!</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Candy;