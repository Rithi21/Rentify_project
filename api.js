// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchProperties = async () => {
    const response = await axios.get(`${API_BASE_URL}/properties`);
    return response.data;
};

export const fetchPropertyDetails = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/properties/${id}`);
    return response.data;
};
