import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './tabs';
import Alert from './alert';

class App extends Component {
  render() {
    console.log(this.props);
    const { alert } = this.props;
    return (
      <div>
        <Tabs />
        <div>{this.props.children}</div>
        {alert && (
          <Alert
            message={alert.alertData.message}
            thumbnail={alert.alertData.thumbnail}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default connect(mapStateToProps)(App);
