import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      devicesData: []
    }
  }

  componentDidMount(){
  fetch('https://my-json-server.typicode.com/irenemherrero/demo/devices/')
      .then(response => {
        return response.json();
      })
      .then(json=>{
        this.setState({
          devicesData: json,
        })
      })
    }
  

  render() {
    return (
      <PhoneListContainer phoneData={this.state.devicesData}/>
    );
  }
}

export default App;
