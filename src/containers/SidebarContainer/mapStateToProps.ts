import {ICommonState} from 'src/interfaces/ICommonState';
import {ISidebarViewData} from 'src/components/SidebarView/interfaces/ISidebarViewData';

export const mapStateToProps = (state: ICommonState): { data: ISidebarViewData } => {
    return {
        data: {
            channels: state.channels,
            repoInfo: state.repoInfo,
            isReposLoading: state.isReposLoading,
        }
    };
};
