import * as React from 'react';
import {ChannelsViewArea} from './ChannelsView.style';
import {IChannelsViewData} from './interfaces/IChannelsViewData';
import {IChannelsViewActions} from './interfaces/IChannelsViewActions';
import {RouteComponentProps} from 'react-router';
import {Table} from 'antd';
import {ChannelsTableColumns} from './utils/ChannelsTableColumns';


export interface IChannelsViewProps extends RouteComponentProps<any> {
    data: IChannelsViewData;
    actions: IChannelsViewActions;
}

export const ChannelsView = (props: IChannelsViewProps) => {

    console.log(props);

    const {releaseDate} = props.match.params;
    const {
        channelRaw,
        channelByDay,
        repoContributors,

        isOrganisationDetailsLoading,
        isRepoInfoLoading,
        isRepoContributorsLoading,
        channels,
        releaseDates
    } = props.data;

    const channelsData = Object.keys(channels).map((channelId, rowIndex: number) => {
        return {
            key: rowIndex,
            id: channelId,
            label: channels[channelId]
        };
    });

    return (
        <>
            <ChannelsViewArea>


                <Table
                    dataSource={channelsData}
                    columns={ChannelsTableColumns}
                    pagination={false}

                />

                {/*<SidebarContainer/>*/}

                {/*
                <Switch>

                    <Route exact path={Config.Routes.Channels}
                           render={() => (
                               <OrganisationDetailsView
                                   data={{
                                       organisationInfo,
                                       isOrganisationDetailsLoading
                                   }}
                               />)}
                    />

                    <Route exact path={Config.Routes.Channel}
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

                </Switch>
*/}


            </ChannelsViewArea>
        </>
    );

};
