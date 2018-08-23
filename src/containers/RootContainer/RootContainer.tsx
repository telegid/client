import * as React from 'react';
import {SFC} from 'react';
import {Col, Row} from 'antd';
import {MainMenu} from '../../components/MainMenu/MainMenu.sfc';
import {HeaderView} from '../../components/HeaderView/HeaderView.sfc';
import {history} from '../../store/store';
import {ChannelSettingsFormView} from '../../components/ChannelSettingsFormView/ChannelSettingsFormView.sfc';
import {connect} from 'react-redux';
import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {SyncContainer} from '../SyncContainer/SyncContainer';

interface IRootContainerProps {
    data: any;
    actions: any;
}

const Root: SFC<IRootContainerProps> = (props) => {
        const {activeChannelLabel, activeChannelId} = props.data;

        return (
            <>
                <HeaderView
                    data={{releaseDates: [], releaseDate: ''}}
                    actions={{
                        pushRouteToOrganisationPage: (orgId: string) => {
                            history.push(`/date/${orgId}`);
                        }
                    }}
                />

                <Row>

                    <Col span={6}>
                        <MainMenu actions={{setActiveChannel: props.actions.setActiveChannel}} data={{activeChannelLabel, activeChannelId, channels: props.data.channels}}/>
                    </Col>

                    <Col span={18}>
                        {
                            props.data.activeChannelId.length > 0
                                ?
                                <ChannelSettingsFormView
                                    data={{channelSettings: {label: activeChannelLabel, id: activeChannelId}}}
                                    actions={{
                                        submitChannelSettingsForm: () => {
                                            console.log('submitChannelSettingsForm');
                                        }
                                    }}
                                />
                                :
                                <SyncContainer/>

                        }

                    </Col>

                </Row>
            </>

        );
    }
;

export const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
