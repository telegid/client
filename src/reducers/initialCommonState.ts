import {ICommonState} from 'src/interfaces/ICommonState';

export const initialCommonState: ICommonState = {
    activeChannelId: '',
    activeChannelLabel: '',
    channels: {},
    channelRaw: '',
    channelByDay: [],
    repoContributors: [],
    releaseDates: [],

    isReposLoading: false,
    isOrganisationDetailsLoading: false,
    isRepoContributorsLoading: false,
    isRepoInfoLoading: false,
};
