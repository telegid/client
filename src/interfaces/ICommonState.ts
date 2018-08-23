import {IContributor} from './IContributor';
import {IChannelSet} from '../components/ChannelsView/interfaces/IChannelsViewData';

export interface ICommonState {
    activeChannelId: string;
    activeChannelLabel: string;
    channels: IChannelSet;

    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];
    releaseDates: string[];


    isOrganisationDetailsLoading: boolean;
    isReposLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
