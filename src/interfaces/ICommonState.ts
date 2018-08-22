import {IOrganisationInfo} from './IOrganisationInfo';
import {IContributor} from './IContributor';
import {IRateLimits} from './IRateLimits';

export interface ICommonState {
    channels: string[];
    organisationInfo: IOrganisationInfo;

    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];
    rateLimits: IRateLimits;
    releaseDates: string[];


    isOrganisationDetailsLoading: boolean;
    isReposLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
