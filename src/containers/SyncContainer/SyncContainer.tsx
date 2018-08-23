import * as React from 'react';

import {mapStateToProps} from './mapStateToProps';
import {mapDispatchToProps} from './mapDispatchToProps';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {SyncView} from '../../components/SyncView/SyncView.sfc';

export const SyncContainer =
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(SyncView));
