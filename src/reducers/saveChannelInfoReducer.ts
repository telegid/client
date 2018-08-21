import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveChannelInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {

    console.log(action)
    return {
        ...state,
        channelInfo: action.payload.data,
        isRepoInfoLoading: false,
    };
};
