import {IContributor} from 'src/interfaces/IContributor';

export interface IChannelSet {
    [key: string]: string;
}

export interface IChannelsViewData {
    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];
    channels: IChannelSet;
    releaseDates: string[];


    isOrganisationDetailsLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
