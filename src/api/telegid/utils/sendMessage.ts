import {ws} from 'src/store/store';

export const sendMessage = async <T> (msg: string) => {
    console.log('will send msg', msg);
    ws.send(msg);
    return Promise.resolve();
};
