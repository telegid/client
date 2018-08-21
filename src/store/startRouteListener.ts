import {Action, History, Location} from 'history';
import {Store} from 'redux';
import {match, matchPath} from 'react-router';
import {Config} from '../config';
import {RootActions} from '../actions/IRootActions';

enum RoutesEnum {
    Date = 'DateRoute',
    Channel = 'ChannelRoute',
    Unknown = 'Unknown'
}

export const startRouteListener = (history: History, store: Store) => {


    // Dispatch actions on first run
    dispatchRouteActions(history.location.pathname, store);

    // Dispatch actions on each route change
    history.listen((location: Location, action: Action) => {
        dispatchRouteActions(location.pathname, store);
    });

};

const getCurrentRoute = (pathname: string): { route: RoutesEnum; routeMatch?: match<any> } => {
    let routeMatch;

    routeMatch = matchPath(pathname, {
        path: Config.Routes.Organisation,
        exact: true
    });

    if (routeMatch !== null) {
        return {route: RoutesEnum.Date, routeMatch};
    }

    const repoRoute = matchPath(pathname, {
        path: Config.Routes.Repo,
        exact: true
    });

    if (repoRoute !== null) {
        return {route: RoutesEnum.Channel, routeMatch: repoRoute};
    }

    return {route: RoutesEnum.Unknown};
};


const dispatchRouteActions = (pathname: string, store: Store) => {
    const {route, routeMatch} = getCurrentRoute(pathname);

    if (routeMatch !== undefined) {
        dispatchRouteFetch(store, route, routeMatch);
    }
};

const dispatchRouteFetch = (store: Store, route: RoutesEnum, routeMatch: match<any>) => {
    switch (route) {
        case RoutesEnum.Date:
            store.dispatch({type: RootActions.ReleaseDatesRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.ChannelsRequested, payload: routeMatch.params});
            break;

        case RoutesEnum.Channel:
            store.dispatch({type: RootActions.ChannelInfoRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.ChannelsRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.ReleaseDatesRequested, payload: routeMatch.params});
            break;
    }
};
