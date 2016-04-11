import React from 'react';
import { Component } from 'react';
import Tabs from './tabs';
export default class App extends Component {
  render() {
    return (
        <div>
            <Tabs />
            <div>
                {this.props.children}
            </div>
        </div>
    );
  }
}
