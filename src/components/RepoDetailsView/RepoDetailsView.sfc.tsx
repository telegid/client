import * as React from 'react';
import {
    ContributorImage,
    ContributorLabel,
    ContributorLink,
    ContributorName,
    ContributorsListAreaWrapper,
    RepoDetailsViewArea,
    RepoInformationArea
} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IContributor} from '../../interfaces/IContributor';
import {Spinner} from '../Spinner/Spinner.sfc';
import {Table, Tag} from 'antd';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
}

export const RepoDetailsView = (props: IRepoDetailsViewProps) => {

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
        <RepoDetailsViewArea>

            <RepoInformationArea>
                {
                    props.data.isRepoInfoLoading
                        ?
                        <Spinner/>
                        :
                        <>
                            <h1>{props.data.repoInfo.name}</h1>
                            <h3>{props.data.repoInfo.description}</h3>
                            <p>{props.data.repoInfo.watchers_count} watchers</p>
                            <p>{props.data.repoInfo.subscribers_count} subscribers</p>

                        </>
                }
            </RepoInformationArea>

            <ContributorsListAreaWrapper>
                <Table dataSource={dataSource} columns={columns}/>

            </ContributorsListAreaWrapper>

        </RepoDetailsViewArea>);
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
