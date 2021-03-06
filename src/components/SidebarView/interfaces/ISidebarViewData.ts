import {IChannelSet} from '../../ChannelsView/interfaces/IChannelsViewData';

export interface ISidebarViewData {
    channelRaw: string;
    channels: IChannelSet;
    isReposLoading: boolean;
}
