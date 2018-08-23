import {ws} from 'src/store/store';

export const sendMessage = async <T> (msg: string): Promise<any> => {
    console.log(ws);
    console.log(msg);
    return ws.subscribe('/sync/status', (a, b) => {
        console.log(a);
        console.log(b);
    });

};
