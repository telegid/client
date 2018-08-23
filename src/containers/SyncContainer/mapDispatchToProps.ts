import {Action, Dispatch} from 'redux';
import {RootActions} from 'src/actions/IRootActions';
import {IChannelsViewActions} from 'src/components/ChannelsView/interfaces/IChannelsViewActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: IChannelsViewActions } => {
    return {
        actions: {
            requestOrganisationInfoAction: (payload: any) => {
                dispatch<any>({type: RootActions.OrganisationInfoRequested, payload: {releaseDate: payload}});
            },
            requestRepoInfoAction: (payload: any) => {
                dispatch<any>({type: RootActions.ChannelInfoRequested, payload});
            }
        }
    };
};
