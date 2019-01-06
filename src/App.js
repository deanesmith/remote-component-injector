import React, { Component } from 'react';
import JsxParser from 'react-jsx-parser'
import ExtensionPanel from './components/ExtensionPanel'

const jsxParserBindings = {
    url: 'https://github.com/deanesmith',
    urlText: 'My Github'
};

let jsxText = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jsxTextLoaded: false
    };
  }

  componentWillMount() {
    //this.props.dispatch(getComponent());
      fetch("http://localhost:3999/jsx.js")
          .then(res => res.text())
          .then(text => {
              jsxText = text;
              this.setState({jsxTextLoaded: true})
          }
      )
  };

  render() {
    return (
      <div className="App">
          <div>The stuff that is output from the react-jsx-parser is below:</div>
          <br/>
          <JsxParser
              bindings={jsxParserBindings}
              components={{ ExtensionPanel }}
              jsx={jsxText}
          />
      </div>
    );
  }
}

export default App;


