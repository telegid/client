import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';
import {IRateLimits} from './IRateLimits';

export interface ICommonState {
    channels: string[];
    organisationInfo: IOrganisationInfo;
    channelInfo: IRepoInfo;
    repoContributors: IContributor[];
    rateLimits: IRateLimits;
    releaseDates: string[];


    isOrganisationDetailsLoading: boolean;
    isReposLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
