import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {AnyAction} from 'redux';
import {IUserAction} from 'src/interfaces/IUserAction';
import {fetchOrganisationInfo} from '../api/github/fetchOrganisationInfo';
import {fetchChannels} from '../api/github/fetchChannels';
import {fetchRepoInfo} from '../api/github/fetchRepoInfo';
import {fetchReleaseDates} from '../api/github/fetchReleaseDates';
import {IDataResponse} from '../interfaces/IDataResponse';
import {IOrganisationInfo} from '../interfaces/IOrganisationInfo';
import {IRepoInfo} from '../interfaces/IRepoInfo';
import {IContributor} from '../interfaces/IContributor';

export function* telegidConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, fetchOrganisationInfoSaga);
    yield takeEvery(RootActions.ChannelsRequested, fetchChannelsListSaga);
    yield takeEvery(RootActions.RepoInfoRequested, fetchRepoInfoSaga);
    yield takeEvery(RootActions.ReleaseDatesRequested, fetchReleaseDatesSaga);
}

function* fetchOrganisationInfoSaga (action: IUserAction<RootActions.OrganisationInfoRequested, { releaseDate: string }>) {
    try {
        const payload: IDataResponse<IOrganisationInfo> = yield call(fetchOrganisationInfo, action.payload.releaseDate);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        if (payload.error) {
            yield put({type: RootActions.LimitError, payload: payload.error});
        } else {
            yield put({type: RootActions.OrganisationInfoFulfilled, payload: payload.data});
        }


    } catch (error) {
        console.error(error);
    }
}

function* fetchChannelsListSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<string[]> = yield call(fetchChannels, action.payload.releaseDate);

        yield put({type: RootActions.ChannelsFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoInfoSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IRepoInfo> = yield call(fetchRepoInfo, action.payload.releaseDate, action.payload.repoId);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        yield put({type: RootActions.RepoInfoFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchReleaseDatesSaga (action: AnyAction) {

    try {

        const payload: IDataResponse<IContributor[]> = yield call(fetchReleaseDates);
        console.log(payload);
        yield put({type: RootActions.ReleaseDatesFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}
