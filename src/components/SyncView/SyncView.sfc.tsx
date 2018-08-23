import * as React from 'react';
import {ChannelsViewArea} from './SyncView.style';
import {ISyncViewData} from './interfaces/ISyncViewData';
import {ISyncViewActions} from './interfaces/ISyncViewActions';
import {RouteComponentProps} from 'react-router';
import {Button, Icon} from 'antd';


export interface IChannelsViewProps extends RouteComponentProps<any> {
    data: ISyncViewData;
    actions: ISyncViewActions;
}

export const SyncView = (props: IChannelsViewProps) => {

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

                <Button><Icon type={'reload'}/>Обновить</Button>
                {/*
                <Table
                    dataSource={channelsData}
                    columns={SyncTableColumns}
                    pagination={false}

                />
*/}


            </ChannelsViewArea>
        </>
    );

};
