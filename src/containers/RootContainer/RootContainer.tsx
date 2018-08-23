import * as React from 'react';
import {ChannelsContainer} from '../ChannelsContainer/ChannelsContainer';
import {SidebarContainer} from '../SidebarContainer/SidebarContainer';
import {Redirect, Route, Switch} from 'react-router';
import {Config} from '../../config';
import {EmptyView} from '../../components/EmptyView/EmptyView.sfc';

export const RootContainer = () =>
    (
        <>
            <Switch>

                <Route path={Config.Routes.Organisation}
                       component={ChannelsContainer}
                />

                <Route component={EmptyView}
                />

            </Switch>


        </>

    );
