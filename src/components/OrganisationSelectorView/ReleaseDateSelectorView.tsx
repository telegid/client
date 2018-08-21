import * as React from 'react';
import {Component} from 'react';
import {IOrganisationSelectorViewData} from './interfaces/IOrganisationSelectorViewData';

import {history} from 'src/store/store';
import {LightLabel} from './OrganisationSelectorView.style';

interface IOrganisationSelectorViewProps {
    data: IOrganisationSelectorViewData;
    // actions: IOrganisationSelectorActions;
}

export interface IHeaderState {
}

export class ReleaseDateSelectorView extends Component<IOrganisationSelectorViewProps, IHeaderState> {
    public props: IOrganisationSelectorViewProps;

    public render () {

        return (
            <>
                <LightLabel htmlFor='organisaton-selector'>Дата выпуска:</LightLabel>
                &nbsp;
                <select
                    name='organisaton-selector'
                    id='organisaton-selector'
                    value={this.props.data.releaseDate}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        history.push(`/date/${event.target.value}`, {
                            view: 'OrganisationRoute',
                            releaseDate: event.target.value
                        });
                    }}
                >
                    {getReleaseDatesOptions(this.props.data.releaseDates)}
                </select>
            </>
        );
    }
}

const getReleaseDatesOptions = (releaseDates: string[]) => {
    console.log(releaseDates);

    return releaseDates.map((releaseDate: string) => {
        return <option key={releaseDate} value={releaseDate}>{releaseDate}</option>;
    });
};
