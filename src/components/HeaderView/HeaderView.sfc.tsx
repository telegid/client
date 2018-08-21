import * as React from 'react';
import {SFC} from 'react';
import {HeaderViewArea, LightLink, LogoArea, OrganisationSelectorArea, RatesLimitsArea} from './HeaderView.style';
import {ReleaseDateSelectorView} from '../OrganisationSelectorView/ReleaseDateSelectorView';
import {IHeaderViewData} from './interfaces/IHeaderViewData';
import {IHeaderViewActions} from './interfaces/IHeaderViewActions';

interface IHeaderViewProps {
    data: IHeaderViewData;
    actions: IHeaderViewActions;
}

export const HeaderView: SFC<IHeaderViewProps> = (props) => {

    const {releaseDate, releaseDates, rateLimits} = props.data;

    return (
        <HeaderViewArea>

            <LogoArea>
                <LightLink to={`/date/${releaseDate}`}>Telegid</LightLink>
            </LogoArea>

            <OrganisationSelectorArea>

                <ReleaseDateSelectorView
                    data={{releaseDates, releaseDate}}
                />
            </OrganisationSelectorArea>

        </HeaderViewArea>
    );
};
