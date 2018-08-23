import {ICommonState} from 'src/interfaces/ICommonState';
import {IMainMenuData} from '../../components/MainMenu/interfaces/IMainMenuData';

export const mapStateToProps = (state: ICommonState): { data: IMainMenuData } => {
    return {
        data: {
            activeChannelId: state.activeChannelId,
            activeChannelLabel: state.activeChannelLabel,
            channels: state.channels,
        }
    };
};
