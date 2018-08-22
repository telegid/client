import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveChannelInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {

    console.log(action)
    return {
        ...state,
        channelRaw: action.payload.data.raw,
        channelByDay: action.payload.data.byday,
        isRepoInfoLoading: false,
    };
};
