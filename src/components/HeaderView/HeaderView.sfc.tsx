import * as React from 'react';
import {SFC} from 'react';
import {HeaderViewArea, LightLink, LogoArea} from './HeaderView.style';
import {IHeaderViewData} from './interfaces/IHeaderViewData';
import {IHeaderViewActions} from './interfaces/IHeaderViewActions';
import {Config} from '../../config';

interface IHeaderViewProps {
    data: IHeaderViewData;
    actions: IHeaderViewActions;
}

export const HeaderView: SFC<IHeaderViewProps> = (props) => {

    return (
        <HeaderViewArea>

            <LogoArea>
                <LightLink to={Config.Routes.Home}>Телегид</LightLink>
            </LogoArea>

        </HeaderViewArea>
    );
};
