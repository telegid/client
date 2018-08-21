import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IContributor} from 'src/interfaces/IContributor';

export interface IEmptyViewData {
    channelInfo: IRepoInfo;
    repoContributors: IContributor[];
}
