import {IOrganisationInfo} from 'src/interfaces/IOrganisationInfo';
import {IContributor} from 'src/interfaces/IContributor';
import {IRateLimits} from 'src/interfaces/IRateLimits';

export interface IOrganisationViewData {
    organisationInfo: IOrganisationInfo;

    channelRaw: string;
    channelByDay: any[];

    repoContributors: IContributor[];
    channels: string[];
    rateLimits: IRateLimits;
    releaseDates: string[];


    isOrganisationDetailsLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
