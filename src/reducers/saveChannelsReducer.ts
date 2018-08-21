import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveChannelsReducer = (state: ICommonState, action: AnyAction): ICommonState => {


    console.log(action.payload);
    return {
        ...state,
        channels: action.payload,
        isReposLoading: false
    };

};
