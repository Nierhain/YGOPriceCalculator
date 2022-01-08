import axios, { AxiosResponse } from 'axios'
import { DbCard } from '../models/DbCard';
const instance = axios.create({
    baseURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
})

const responseBody = (response: AxiosResponse) => response.data.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const CardAPI = {
    getAllCards: (): Promise<DbCard[]> => requests.get(''),
    getCard: (id: string): Promise<DbCard> => requests.get(`?id=${id}`),
}