import React from 'react';

export default function Header({filters, filter, onFilterChange}) {
    return (
        <div style={{backgroundColor:'LightGray'}}>
            <h2>Header</h2>
            <ul>
            {filters.map((value,index) => (
                <li key={index}>
                    <button key={index} onClick={()=>onFilterChange(value)}>{value}</button>
                </li>
            ))}
            </ul>
        </div>
    );
}

