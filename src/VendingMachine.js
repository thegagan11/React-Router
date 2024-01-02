import React from 'react';
import { Link } from 'react-router-dom';


function VendingMachine() {
    return (
        <div>
            <h1> Welcome to the Vending Machine!</h1>
            <h3> Select a Snack </h3>
            <ul>
                <li><Link to="/soda">Soda</Link></li>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/candy">Candy</Link></li>
            </ul>
        </div>
    );
}


export default VendingMachine;