import {ICommonState} from 'src/interfaces/ICommonState';
import {IChannelsViewData} from 'src/components/ChannelsView/interfaces/IChannelsViewData';

export const mapStateToProps = (state: ICommonState): { data: IChannelsViewData } => {
    return {
        data: {
            channels: state.channels,
            channelRaw: state.channelRaw,
            channelByDay: state.channelByDay,

            repoContributors: state.repoContributors,
            releaseDates: state.releaseDates,

            isOrganisationDetailsLoading: state.isOrganisationDetailsLoading,
            isRepoInfoLoading: state.isRepoInfoLoading,
            isRepoContributorsLoading: state.isRepoContributorsLoading,
        }
    };
};
