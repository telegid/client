import {Config} from '../../config';
import {fetchData} from './utils/fetchData';

export const fetchChannels = async (releaseDate: string) => {
    return fetchData(`${Config.BasePath}/channels?release_date=${releaseDate}`);
};
