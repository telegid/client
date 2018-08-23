import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: any } => {
    return {
        actions: {
            setActiveChannel: (channelId: string) => {
                console.log(`will dispatch setActiveChannel: ${channelId}`);
                dispatch<any>({type: RootActions.SetActiveChannel, payload: {channelId}})
                ;
            }
        }
    };
};
