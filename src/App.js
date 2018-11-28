import React, { Component } from 'react';
import './App.css';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
 
const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({input: e.target.value})
  }
  render() {
    return (
      <div id="editor">
        <p id="title">Markdown Previewer</p>
        <button type="button" title="Clear">X</button>
        <textarea value={this.state.input} onChange={this.handleChange} />
        <div>
        <p>{md.render(this.state.input)}</p>
      </div>
      </div>
    );
  }
}

export default App;
