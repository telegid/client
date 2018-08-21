import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IContributor} from 'src/interfaces/IContributor';

export interface IChannelDetailsViewData {
    channelInfo: IRepoInfo;
    repoContributors: IContributor[];

    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
