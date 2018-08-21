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

    ChannelInfoRequested = 'RootActions.ChannelInfoRequested',
    ChannelInfoFulfilled = 'RootActions.ChannelInfoFulfilled',

    ReleaseDatesRequested = 'RootActions.ReleaseDatesRequested',
    ReleaseDatesFulfilled = 'RootActions.ReleaseDatesFulfilled'
}
