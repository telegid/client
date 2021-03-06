import {IContributor} from 'src/interfaces/IContributor';

export interface IChannelDetailsViewData {
    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];

    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
