import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveReleaseDatesReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        releaseDates: action.payload,
        isRepoContributorsLoading: false,
    };
};
