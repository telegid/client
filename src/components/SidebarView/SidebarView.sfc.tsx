import * as React from 'react';
import {ActiveLabel, ListLink, SidebarViewWrapper} from './SidebarView.style';
import {ISidebarViewData} from './interfaces/ISidebarViewData';
import {ISidebarViewActions} from './interfaces/ISidebarViewActions';
import {RouteComponentProps} from 'react-router';
import {Spinner} from '../Spinner/Spinner.sfc';

interface ISidebarViewProps extends RouteComponentProps<any> {
    data: ISidebarViewData;
    actions: ISidebarViewActions;
}

export const SidebarView = (props: ISidebarViewProps) => (
    <SidebarViewWrapper>
        {props.data.isReposLoading ? <Spinner/> : null}
        {getReposTitles(props)}
    </SidebarViewWrapper>
);

const getReposTitles = (props: ISidebarViewProps) => {

    return props.data.channels.map((channelId: string, index: number) => {
            return props.data.repoInfo.name === channelId
                ?
                <ActiveLabel key={index}>{channelId}
                    {/*<WatchersCount>{repo.watchers_count} watchers</WatchersCount>*/}
                </ActiveLabel>
                :
                <ListLink key={index}
                          to={`/date/${props.match.params.releaseDate}/${channelId}`}>
                    {channelId}
                    {/*<WatchersCount>{repo.watchers_count} watchers</WatchersCount>*/}
                </ListLink>;
        }
    );
};
