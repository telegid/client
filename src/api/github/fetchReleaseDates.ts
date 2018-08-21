import {Config} from '../../config';
import {fetchData} from './utils/fetchData';

export const fetchReleaseDates = async () => {
    return fetchData(`${Config.BasePath}/dates`);
};
