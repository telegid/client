import {sendMessage} from './utils/sendMessage';
import {Config} from '../../config';

export const fetchChannelInfo = async (releaseDate: string, channelId: string) => {
    return sendMessage(`${Config.BasePath}/channel?channel_id=${channelId}&release_date=${releaseDate}`);
};
