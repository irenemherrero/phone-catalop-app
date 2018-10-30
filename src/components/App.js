import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route 
          exact path='/' 
          render={()=> <PhoneListContainer phoneData={this.state.devicesData}/> } 
        />
        <Route 
          path='/:id' 
          render={()=> <PhoneDetailComponent phoneData={this.state.devicesData}/>}
        />
      </Switch>
      
    );
  }
}

export default App;
