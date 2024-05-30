// PropertyDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPropertyDetails } from './api';

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const getPropertyDetails = async () => {
            try {
                const response = await fetchPropertyDetails(id);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };
        getPropertyDetails();
    }, [id]);

    return (
        <div>
            {property && (
                <div>
                    <h2>{property.title}</h2>
                    <p>{property.description}</p>
                    {/* Display other property details */}
                </div>
            )}
        </div>
    );
}

export default PropertyDetails;
