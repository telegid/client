import {fork} from 'redux-saga/effects';
import {telegidConnectionSaga} from './telegidConnectionSaga';

export function* rootSaga () {
    yield fork(telegidConnectionSaga);
}
