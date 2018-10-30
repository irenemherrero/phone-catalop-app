import React, { Component } from 'react';

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
        console.log(json);
        this.setState({
          devicesData: json,
        }, ()=>{console.log(this.state)})
      })
    }
  

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
