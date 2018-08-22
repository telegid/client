import * as React from 'react';
import {ChannelDetailsViewArea, ChannelInformationArea, ContributorImage, ContributorLabel, ContributorLink, ContributorName, ContributorsListAreaWrapper} from './ChannelDetailsView.style';
import {IContributor} from '../../interfaces/IContributor';
import {Button, Col, Row, Table, Tabs} from 'antd';
import {IChannelDetailsViewData} from './interfaces/IChannelDetailsViewData';
import {Spinner} from '../Spinner/Spinner.sfc';
import {tableColumns} from './utils/tableColumns';
import {DaysNames} from '../../constants/DaysNames';
import {ChannelSettingsFormView} from '../ChannelSettingsFormView/ChannelSettingsFormView.sfc';

export interface IChannelDetailsViewProps {
    data: IChannelDetailsViewData;
}

export const ChannelDetailsView = (props: IChannelDetailsViewProps) => {

    return (
        <ChannelDetailsViewArea>

            <ContributorsListAreaWrapper>
                <Tabs type='card'>

                    <Tabs.TabPane tab='Обработка' key='process'>
                        <Tabs defaultActiveKey='1' animated={false}>

                            {getDaysTabs(props.data.channelByDay)}
                        </Tabs>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab='Исходный контент' key='source'>

                        <ChannelInformationArea>
                            {
                                props.data.isRepoInfoLoading
                                    ?
                                    <Spinner/>
                                    :
                                    <pre>{props.data.channelRaw}</pre>
                            }
                        </ChannelInformationArea>

                    </Tabs.TabPane>

                    <Tabs.TabPane tab='Настройки' key='settings'>
                        <ChannelSettingsFormView/>
                    </Tabs.TabPane>
                </Tabs>


            </ContributorsListAreaWrapper>

        </ChannelDetailsViewArea>);
};

const getContributorsList = (repoContributors: IContributor[]) => {
    return repoContributors.map((contributor, index: number) => {
        return <ContributorLabel key={index}>
            <ContributorLink target={'blank'} href={contributor.html_url}>
                <ContributorImage src={contributor.avatar_url} alt={contributor.login}/>
                <ContributorName>{contributor.login}</ContributorName>
            </ContributorLink>
        </ContributorLabel>;
    });
};
const getDaysTabs = (channelByDay: any[]) => {
    return (
        channelByDay.map((day, index) => {

            const dayData = day.map((row: { time: string, age: number, remainingPart: string, original: string }, rowIndex: number) => {
                return {
                    key: rowIndex,
                    time: row.time,
                    age: row.age > -1 ? row.age : 'N/A',
                    content: row.remainingPart,
                    original: row.original
                };
            });

            return (
                <Tabs.TabPane tab={DaysNames[index]} key={index}>
                    <Row>
                        <Col span={12}>
                            <Button type='primary'>Обработать неделю</Button>
                        </Col>
                    </Row>
                    <Table
                        dataSource={dayData}
                        columns={tableColumns}
                        expandedRowRender={(record: { time: string, age: number, remainingPart: string, original: string }) => <p style={{margin: 0, fontSize: '12px'}}>{record.original}</p>}
                        pagination={false}

                    />
                </Tabs.TabPane>

            );

        })
    );
};
