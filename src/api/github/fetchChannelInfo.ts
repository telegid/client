import {fetchData} from './utils/fetchData';
import {Config} from '../../config';

export const fetchChannelInfo = async (releaseDate: string, channelId: string) => {
    return fetchData(`${Config.BasePath}/channel?channel_id=${channelId}&release_date=${releaseDate}`);
};
