import { useQuery } from '@tanstack/react-query';
import CatFactService from '../services/catFact';
import { CatFact } from '../types/catFact';
import { useEffect } from 'react';

export const useFatchFact = () => {
    const catFact = new CatFactService()
    const { isLoading, data, refetch } = useQuery(
        {
            enabled: false,
            queryKey: ['fact'],
            queryFn: async () => {
                const response = await catFact.getFact()
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result: CatFact = await response.json();
                return result;
            },
        },
    );

    useEffect(() => {
        refetch();
    }, [refetch]);

    return {
        isLoading,
        data,
        refetch
    };
};
