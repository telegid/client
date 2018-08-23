import {sendMessage} from './utils/sendMessage';
import {createMessage} from './utils/createMessage';
import {Messages} from './utils/Messages';

export const fetchChannels = async () => {
    const msg = createMessage(Messages.Channels);

    return sendMessage(msg);
};
