import {IRepoInfo} from 'src/interfaces/IRepoInfo';

export interface ISidebarViewData {
    repoInfo: IRepoInfo;
    channels: string[];
    isReposLoading: boolean;
}
