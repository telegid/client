import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const fetchChannelsReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        isReposLoading: true
    };
};
