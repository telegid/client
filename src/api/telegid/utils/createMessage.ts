import {Messages} from './Messages';

export const createMessage = (message: Messages, data?: any) => {
    return data ? JSON.stringify({message, data}) : JSON.stringify({message});
};
