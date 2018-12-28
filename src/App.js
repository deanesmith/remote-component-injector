import React, { Component } from 'react';
import { connect } from 'react-redux';
import JsxParser from 'react-jsx-parser'
import { getComponent } from './actions/componentActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: ''
    };
  }

  componentWillMount() {
    this.props.dispatch(getComponent());
  };

  render() {
    return (
      <div className="App">
        The stuff that is being injected from a remote api is below:
        <JsxParser jsx={this.props.component} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      component: state.component.component
    };
}

export default connect(mapStateToProps)(App);


