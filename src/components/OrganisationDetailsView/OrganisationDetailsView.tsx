import * as React from 'react';
import {OrganisationDetailsViewArea} from './OrganisationDetailsView.style';
import {Spinner} from '../Spinner/Spinner.sfc';
import {IOrganisationDetailsViewData} from './interfaces/IOrganisationDetailsViewData';
import {Button} from 'antd';

export interface IOrganisationDetailsViewProps {
    data: IOrganisationDetailsViewData;
}

export const OrganisationDetailsView = (props: IOrganisationDetailsViewProps) => {
    return (
        <OrganisationDetailsViewArea>
            {
                props.data.isOrganisationDetailsLoading
                    ?
                    <Spinner/>
                    :
                    <Button>Click me</Button>
            }


        </OrganisationDetailsViewArea>
    );
};
