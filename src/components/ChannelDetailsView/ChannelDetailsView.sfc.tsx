import * as React from 'react';
import {ChannelDetailsViewArea, ChannelInformationArea, ContributorImage, ContributorLabel, ContributorLink, ContributorName, ContributorsListAreaWrapper} from './ChannelDetailsView.style';
import {IContributor} from '../../interfaces/IContributor';
import {Table, Tabs, Tag} from 'antd';
import {IChannelDetailsViewData} from './interfaces/IChannelDetailsViewData';
import {Spinner} from '../Spinner/Spinner.sfc';

export interface IChannelDetailsViewProps {
    data: IChannelDetailsViewData;
}

export const ChannelDetailsView = (props: IChannelDetailsViewProps) => {

    const dataSource = [{
        key: '1',
        time: '06.00',
        age: 12,
        content: 'Невероятные изобретения. Сезон: 2. 16-я серия. Хорошо это или плохо, но конфликт и потребность изучать неизведанное двигают вперед развитие технологий человечества. Так уж случилось, что изобретательнее всего люди становятся в процессе разрушения. (2016)'
    }, {
        key: '2',
        time: '12.55',
        age: 0,
        content: 'Полигон. Сезон: 1. 6-я серия. В этой серии мы катаемся на американских горках, запускаем змея и пытаемся растянуть БМД-2.'
    }];

    const columns = [
        {
            title: 'Время',
            dataIndex: 'time',
            key: 'time',
            width: 100
        },
        {
            title: 'Контент',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            width: 100,
            render: (tag: string) =>
                (
                    <span><Tag color='blue' key={tag}>{tag}+</Tag></span>
                )
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
            width: 120,
        }
    ];

    return (
        <ChannelDetailsViewArea>

            <ContributorsListAreaWrapper>
                <Tabs type='card'>

                    <Tabs.TabPane tab='Обработка' key='process'>
                        <Tabs defaultActiveKey='1' animated={false}>
                            <Tabs.TabPane tab='Понедельник' key='1'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Вторник' key='2'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Среда' key='3'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Четверг' key='4'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Пятница' key='5'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Суббота' key='6'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Воскресенье' key='7'>
                                <Table dataSource={dataSource} columns={columns}/>
                            </Tabs.TabPane>
                        </Tabs>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab='Исходный контент' key='source'>

                        <ChannelInformationArea>
                            {
                                props.data.isRepoInfoLoading
                                    ?
                                    <Spinner/>
                                    :
                                    <pre>{props.data.channelInfo}</pre>
                            }
                        </ChannelInformationArea>

                    </Tabs.TabPane>

                    <Tabs.TabPane tab='Настройки' key='settings'>Content of Tab Pane 3</Tabs.TabPane>
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
