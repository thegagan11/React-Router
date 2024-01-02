import React from 'react';
import { Link } from 'react-router-dom';


function Soda() {
    return (
        <div>
            <h2>Soda</h2>
            <p>Refreshing fizzy drink!</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}


export default Soda;