import {Action, Dispatch} from 'redux';
import {RootActions} from 'src/actions/IRootActions';
import {ISyncViewActions} from '../../components/SyncView/interfaces/ISyncViewActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: ISyncViewActions } => {
    return {
        actions: {
            requestSyncStatus: () => {
                dispatch<any>({type: RootActions.SyncStatusRequested});
            }
        }
    };
};
