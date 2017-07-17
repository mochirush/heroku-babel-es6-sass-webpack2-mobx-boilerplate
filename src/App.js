import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import ExampleComponent from './components/example-component';

import uiStore from './store/uiStore'

const uiState = window.uiState = new uiStore()

@observer export default class App extends React.Component {
  render(){
    return (
      <div>
        <ExampleComponent
          uiState={this.props.uiState}
        />
      </div>
    )
  }
}