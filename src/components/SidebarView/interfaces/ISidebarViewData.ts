import {IRepoInfo} from 'src/interfaces/IRepoInfo';

export interface ISidebarViewData {
    channelInfo: IRepoInfo;
    channels: string[];
    isReposLoading: boolean;
}
