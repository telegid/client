import {IDataResponse} from 'src/interfaces/IDataResponse';

export const fetchData = async <T> (url: string): Promise<IDataResponse<T>> => {

    const resp: Response = await fetch(url);

    const data = await resp.json();

    return data;

};
