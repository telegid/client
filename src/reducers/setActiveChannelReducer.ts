import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const setActiveChannelReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        activeChannelId: action.payload.channelId,
        activeChannelLabel: state.channels[action.payload.channelId]
    };
};
