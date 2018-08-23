import {ICommonState} from 'src/interfaces/ICommonState';
import {IChannelsViewData} from 'src/components/ChannelsView/interfaces/IChannelsViewData';

export const mapStateToProps = (state: ICommonState): { data: IChannelsViewData } => {
    return {
        data: {
            organisationInfo: state.organisationInfo,
            channels: state.channels,
            channelRaw: state.channelRaw,
            channelByDay: state.channelByDay,

            repoContributors: state.repoContributors,
            rateLimits: state.rateLimits,
            releaseDates: state.releaseDates,

            isOrganisationDetailsLoading: state.isOrganisationDetailsLoading,
            isRepoInfoLoading: state.isRepoInfoLoading,
            isRepoContributorsLoading: state.isRepoContributorsLoading,
        }
    };
};
