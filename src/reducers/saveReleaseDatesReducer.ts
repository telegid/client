import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveReleaseDatesReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    console.log('-==================-');
    console.log(action);
    console.log('-==================-');


    return {
        ...state,
        releaseDates: action.payload,
        isRepoContributorsLoading: false,
    };
};
