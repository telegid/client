import * as React from 'react';

import {Tag} from 'antd';

export const tableColumns = [
    {
        title: 'Время',
        dataIndex: 'time',
        key: 'time',
        width: 100,
        render: (time: string) =>
            (
                <span><Tag key={time}>{time}</Tag></span>
            )
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
        render: (ageNumber: string) =>
            (
                <span><Tag color={ageColors[ageNumber]} key={ageNumber}>{ageNumber !== 'N/A' ? `${ageNumber}+` : 'N/A'}</Tag></span>
            )
    },
    {
        title: 'Категория',
        dataIndex: 'category',
        key: 'category',
        width: 120,
    }
];

const ageColors: { [key: string]: string } = {
    'N/A': 'red',
    '0': 'green',
    '6': 'purple',
    '12': 'blue',
    '16': 'geekblue',
    '18': 'magenta',
};
