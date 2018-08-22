import {ICommonState} from 'src/interfaces/ICommonState';

export const initialOrganisationInfo = {
    name: '',
    avatar_url: '',
    description: '',
    location: '',
    email: '',
    blog: '',
    public_repos: -1,
    html_url: '',
};

export const initialRateLimits = {
    rateLimit: 0,
    rateLimitRemaining: 0,
    rateLimitResetTimestamp: 0
};

export const initialCommonState: ICommonState = {
    organisationInfo: initialOrganisationInfo,
    channels: [],
    channelRaw: '',
    channelByDay: [],
    repoContributors: [],
    releaseDates: [],
    rateLimits: initialRateLimits,

    isReposLoading: false,
    isOrganisationDetailsLoading: false,
    isRepoContributorsLoading: false,
    isRepoInfoLoading: false,
};
