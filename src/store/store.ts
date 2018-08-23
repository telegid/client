import {applyMiddleware, createStore} from 'redux';

import createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from '../sagas/rootSaga';
import {rootReducer} from 'src/reducers/rootReducer';
import {initialCommonState} from '../reducers/initialCommonState';
import {startRouteListener} from './startRouteListener';
import {RootActions} from '../actions/IRootActions';

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

export const ws = new WebSocket('ws://localhost:8000');

ws.addEventListener('open', () => {
    sagaMiddleware.run(rootSaga);
    startRouteListener(history, store);

    ws.addEventListener('message', (msg) => {
        store.dispatch({type: RootActions.ChannelsFulfilled, payload: JSON.parse(msg.data)});
    });

});
