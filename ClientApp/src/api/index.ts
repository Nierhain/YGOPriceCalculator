import axios, {AxiosResponse} from 'axios'
import { DbCard, YGOPDCard } from '../models/Card';
const instance = axios.create({
    baseURL: 'https://localhost:5000/api/'
})

const responseBody = (response: AxiosResponse) => response.data;
const remoteResponseBody = (response: AxiosResponse) => response.data.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: any) => instance.post(url, body).then(responseBody),
    getRemote: (url: string) => axios.get(url).then(remoteResponseBody)
}

export const CardAPI = {
    getAllCardsFromRemote: (): Promise<YGOPDCard[]> => requests.getRemote('https://db.ygoprodeck.com/api/v7/cardinfo.php'),
    getCardFromRemote: (id: string): Promise<YGOPDCard> => requests.getRemote(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`),
    getAllCards: (): Promise<DbCard[]> => requests.get('Card/First'),
    updateDB: (body: DbCard[]): Promise<void> => requests.post('Card', body)
}