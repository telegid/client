import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {AnyAction} from 'redux';
import {IUserAction} from 'src/interfaces/IUserAction';
import {fetchOrganisationInfo} from '../api/telegid/fetchOrganisationInfo';
import {fetchChannels} from '../api/telegid/fetchChannels';
import {fetchChannelInfo} from '../api/telegid/fetchChannelInfo';
import {fetchReleaseDates} from '../api/telegid/fetchReleaseDates';
import {IDataResponse} from '../interfaces/IDataResponse';
import {IOrganisationInfo} from '../interfaces/IOrganisationInfo';
import {IRepoInfo} from '../interfaces/IRepoInfo';
import {IContributor} from '../interfaces/IContributor';
import {fetchSyncStatus} from '../api/telegid/fetchSyncStatus';

export function* telegidConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, fetchOrganisationInfoSaga);
    yield takeEvery(RootActions.ChannelsRequested, fetchChannelsListSaga);
    yield takeEvery(RootActions.ChannelInfoRequested, fetchChannelInfoSaga);
    yield takeEvery(RootActions.ReleaseDatesRequested, fetchReleaseDatesSaga);
    yield takeEvery(RootActions.SyncStatusRequested, fetchSyncStatusSaga);
}

function* fetchOrganisationInfoSaga (action: IUserAction<RootActions.OrganisationInfoRequested, { releaseDate: string }>) {
    try {
        const payload: IDataResponse<IOrganisationInfo> = yield call(fetchOrganisationInfo, action.payload.releaseDate);

        yield put({type: RootActions.OrganisationInfoFulfilled, payload: payload.data});

    } catch (error) {
        console.error(error);
    }
}

function* fetchChannelsListSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<string[]> = yield call(fetchChannels);

        // yield put({type: RootActions.ChannelsFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchChannelInfoSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IRepoInfo> = yield call(fetchChannelInfo, action.payload.releaseDate, action.payload.channelId);

        yield put({type: RootActions.ChannelInfoFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchReleaseDatesSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IContributor[]> = yield call(fetchReleaseDates);
        yield put({type: RootActions.ReleaseDatesFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchSyncStatusSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IContributor[]> = yield call(fetchSyncStatus);
    } catch (error) {
        console.error(error);
    }
}
