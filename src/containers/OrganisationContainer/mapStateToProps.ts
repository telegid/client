import {ICommonState} from 'src/interfaces/ICommonState';
import {IOrganisationViewData} from 'src/components/OrganisationView/interfaces/IOrganisationViewData';

export const mapStateToProps = (state: ICommonState): { data: IOrganisationViewData } => {

    console.log(state)

    return {
        data: {
            organisationInfo: state.organisationInfo,
            channels: state.channels,
            repoInfo: state.repoInfo,
            repoContributors: state.repoContributors,
            rateLimits: state.rateLimits,
            releaseDates: state.releaseDates,

            isOrganisationDetailsLoading: state.isOrganisationDetailsLoading,
            isRepoInfoLoading: state.isRepoInfoLoading,
            isRepoContributorsLoading: state.isRepoContributorsLoading,
        }
    };
};
