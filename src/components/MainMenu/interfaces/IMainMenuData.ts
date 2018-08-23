import {IChannelSet} from '../../ChannelsView/interfaces/IChannelsViewData';

export interface IMainMenuData {
    activeChannelId: string;
    activeChannelLabel: string;
    channels: IChannelSet;
}
