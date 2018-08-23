import {Config} from '../../config';
import {sendMessage} from './utils/sendMessage';

export const fetchReleaseDates = async () => {
    return sendMessage(`${Config.BasePath}/dates`);
};
