import {defaultReducer} from './defaultReducer';
import {AnyAction, Reducer} from 'redux';
import {ICommonState} from 'src/interfaces/ICommonState';
import {RootActions} from '../actions/IRootActions';
import {fetchChannelsReducer} from './fetchChannelsReducer';
import {saveOrganisationInfoReducer} from './saveOrganisationInfoReducer';
import {saveRepoInfoReducer} from './saveRepoInfoReducer';
import {saveReleaseDatesReducer} from './saveReleaseDatesReducer';
import {saveChannelsReducer} from './saveChannelsReducer';
import {saveRateLimitsReducer} from './saveRateLimitsReducer';
import {fetchRepoInfoReducer} from './fetchRepoInfoReducer';
import {fetchReleaseDatesReducer} from './fetchReleaseDatesReducer';

export const rootReducer: Reducer<ICommonState> = (state: ICommonState, action: AnyAction): ICommonState => {

    switch (action.type) {

        case RootActions.RateLimitsUpdated:
            return saveRateLimitsReducer(state, action);

        case RootActions.ChannelsRequested:
            return fetchChannelsReducer(state, action);

        case RootActions.RepoInfoRequested:
            return fetchRepoInfoReducer(state, action);

        case RootActions.ReleaseDatesRequested:
            return fetchReleaseDatesReducer(state, action);

        case RootActions.ChannelsFulfilled:
            return saveChannelsReducer(state, action);

        case RootActions.OrganisationInfoFulfilled:
            return saveOrganisationInfoReducer(state, action);

        case RootActions.RepoInfoFulfilled:
            return saveRepoInfoReducer(state, action);


        case RootActions.ReleaseDatesFulfilled:
            return saveReleaseDatesReducer(state, action);

        // -----------------------------------------------------------------

        default:
            return defaultReducer(state, action);
    }
};