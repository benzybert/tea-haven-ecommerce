import { useState, useEffect } from 'react';
import { fetchAllTeas } from '../api/teaApi';

export const useTeas = () => {
    const [teas, setTeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTeas = async () => {
            try {
                const data = await fetchAllTeas();
                setTeas(data);
            } catch (err) {
                console.error('Error fetching teas:', err);
                setError('Failed to fetch teas.');
            } finally {
                setLoading(false);
            }
        };

        loadTeas();
    }, []);

    return { teas, loading, error };
};