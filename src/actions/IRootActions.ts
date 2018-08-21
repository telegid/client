export interface IRootActions {
    requestRepoInfoAction (repoName: string): void;
}

export enum RootActions {
    RateLimitsUpdated = 'RootActions.RateLimitsUpdated',
    LimitError = 'RootActions.LimitError',

    ChannelsRequested = 'RootActions.ChannelsRequested',
    ChannelsFulfilled = 'RootActions.ChannelsFulfilled',

    OrganisationInfoRequested = 'RootActions.OrganisationInfoRequested',
    OrganisationInfoFulfilled = 'RootActions.OrganisationInfoFulfilled',

    RepoInfoRequested = 'RootActions.RepoInfoRequested',
    RepoInfoFulfilled = 'RootActions.RepoInfoFulfilled',

    ReleaseDatesRequested = 'RootActions.ReleaseDatesRequested',
    ReleaseDatesFulfilled = 'RootActions.ReleaseDatesFulfilled'
}
