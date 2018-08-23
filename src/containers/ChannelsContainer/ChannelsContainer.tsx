import * as React from 'react';

import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {ChannelsView} from 'src/components/ChannelsView/ChannelsView.sfc';

export const ChannelsContainer =
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(ChannelsView));
