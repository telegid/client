import {ICommonState} from 'src/interfaces/ICommonState';
import {IOrganisationViewData} from 'src/components/OrganisationView/interfaces/IOrganisationViewData';

export const mapStateToProps = (state: ICommonState): { data: IOrganisationViewData } => {
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
