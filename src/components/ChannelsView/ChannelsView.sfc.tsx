import * as React from 'react';
import {OrganisationViewArea} from './ChannelsView.style';
import {ChannelDetailsView} from '../ChannelDetailsView/ChannelDetailsView.sfc';
import {IChannelsViewData} from './interfaces/IChannelsViewData';
import {IChannelsViewActions} from './interfaces/IChannelsViewActions';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {OrganisationDetailsView} from '../OrganisationDetailsView/OrganisationDetailsView';
import {HeaderView} from '../HeaderView/HeaderView.sfc';
import {history} from 'src/store/store';
import {Config} from 'src/config';
import {SidebarContainer} from 'src/containers/SidebarContainer/SidebarContainer';

export interface IOrganisationViewProps extends RouteComponentProps<any> {
    data: IChannelsViewData;
    actions: IChannelsViewActions;
}

export const ChannelsView = (props: IOrganisationViewProps) => {

    const {releaseDate} = props.match.params;
    const {
        channelRaw,
        channelByDay,
        repoContributors,
        organisationInfo,
        rateLimits,

        isOrganisationDetailsLoading,
        isRepoInfoLoading,
        isRepoContributorsLoading,

        releaseDates
    } = props.data;

    return (
        <>
            <HeaderView
                data={{releaseDates, releaseDate, rateLimits}}
                actions={{
                    pushRouteToOrganisationPage: (orgId: string) => {
                        history.push(`/date/${orgId}`);
                    }
                }}
            />

            <OrganisationViewArea>
                <SidebarContainer/>
                <Switch>

                    <Route exact path={Config.Routes.Organisation}
                           render={() => (
                               <OrganisationDetailsView
                                   data={{
                                       organisationInfo,
                                       isOrganisationDetailsLoading
                                   }}
                               />)}
                    />

                    <Route exact path={Config.Routes.Repo}
                           render={() => (
                               <ChannelDetailsView
                                   data={{
                                       channelByDay,
                                       channelRaw,
                                       repoContributors,
                                       isRepoInfoLoading,
                                       isRepoContributorsLoading
                                   }}
                               />
                           )}

                    />

                    <Route>Empty container</Route>

                </Switch>

            </OrganisationViewArea>
        </>
    );

};
