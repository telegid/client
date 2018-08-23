import {applyMiddleware, createStore} from 'redux';

import createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from '../sagas/rootSaga';
import {rootReducer} from 'src/reducers/rootReducer';
import {initialCommonState} from '../reducers/initialCommonState';
import {startRouteListener} from './startRouteListener';
import * as nes from 'nes';


const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

export const store = createStore(
    rootReducer,
    initialCommonState,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

export const ws = new nes.Client('ws://localhost:8000');
ws.connect().then(() => {
    ws.subscribe('/sync/status', (update, flags) => {
        console.log(update);
        console.log(flags);
    });
});

/*
wsConnection.connect().then(() => {
    wsConnection.request('hello');  // Can also request '/h'
});
*/

sagaMiddleware.run(rootSaga);
startRouteListener(history, store);
