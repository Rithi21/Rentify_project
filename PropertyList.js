// PropertyList.js

import React, { useEffect, useState } from 'react';
import { fetchProperties } from './api';

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const response = await fetchProperties();
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
        getProperties();
    }, []);

    return (
        <div>
            <h2>Property List</h2>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>{property.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PropertyList;
