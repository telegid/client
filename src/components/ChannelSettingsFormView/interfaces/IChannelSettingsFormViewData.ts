import {IContributor} from 'src/interfaces/IContributor';

export interface IChannelSettingsFormViewData {
    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];

    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
