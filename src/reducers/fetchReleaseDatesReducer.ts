import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const fetchReleaseDatesReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        releaseDates: [],
        isRepoContributorsLoading: true
    };
};
