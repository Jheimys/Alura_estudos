import axios from 'axios';
import type { Movie } from '../types';

const BASE_URL = 'http://localhost:3001';

export const getMOvies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
    return response.data;
}