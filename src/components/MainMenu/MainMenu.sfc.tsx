import {Icon, Menu} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

import * as React from 'react';
import {IChannelSet} from '../ChannelsView/interfaces/IChannelsViewData';
import {IMainMenuData} from './interfaces/IMainMenuData';
import {IMainMenuActions} from './interfaces/IMainMenuActions';

interface IMainMenuProps {
    data: IMainMenuData;
    actions: IMainMenuActions;
}

export const MainMenu = (props: IMainMenuProps) => {

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
        >
            <SubMenu key='sub1' title={<span><Icon type='setting'/><span>Настройки каналов</span></span>}>
                {getMenuChannels(props.data.channels, props.actions.setActiveChannel)}
            </SubMenu>
            <SubMenu key='sub2' title={<span><Icon type='schedule'/><span>Программы</span></span>}>
                <Menu.Item key='5'>Option 5</Menu.Item>
                <Menu.Item key='6'>Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title={<span><Icon type='right'/><span>Сборка</span></span>}>
                <Menu.Item key='9'>Option 9</Menu.Item>
                <Menu.Item key='10'>Option 10</Menu.Item>
                <Menu.Item key='11'>Option 11</Menu.Item>
                <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
        </Menu>

    );
};

const getMenuChannels = (channels: IChannelSet, clickHandler: (channelId: string) => void) => {
    return Object.keys(channels).map((channelId) => <Menu.Item key={channelId} onClick={clickHandler.bind(null, channelId)}>{channels[channelId]}</Menu.Item>);
};
