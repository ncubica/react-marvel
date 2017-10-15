import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import hide_alert_action from '../actions/alert/hide_alert_action';
import Tabs from './tabs';
import Alert from './alert';

class App extends Component {
    render() {
        const { alertData, dismissAlert, children } = this.props;
        return (
            <div>
                <Tabs />
                <div>{children}</div>
                {alertData && (
                    <Alert
                        message={alertData.message}
                        thumbnail={alertData.thumbnail}
                        thumbnailMessage={alertData.thumbnailMessage}
                        onDismiss={dismissAlert}
                    />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alertData: state.alert.alertData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dismissAlert: hide_alert_action }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
