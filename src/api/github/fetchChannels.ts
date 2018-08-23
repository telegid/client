import {Config} from '../../config';
import {fetchData} from './utils/fetchData';

export const fetchChannels = async () => {
    return fetchData(`${Config.BasePath}/channels`);
};
