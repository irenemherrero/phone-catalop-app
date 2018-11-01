import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';
import PlaceHolderComponent from './PlaceholderComponent';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      devicesData: null
    }
  }

  componentDidMount(){
  if(JSON.parse(localStorage.getItem('savedPhonesData'))){
    const savedPhonesData = JSON.parse(localStorage.getItem('savedPhonesData'));
    this.setState({
      devicesData: savedPhonesData,
    })
  } else {
    fetch('https://my-json-server.typicode.com/irenemherrero/demo/devices/')
        .then(response => {
          return response.json();
        })
        .then(json=>{
          localStorage.setItem('savedPhonesData', JSON.stringify(json));
          this.setState({
            devicesData: json,
          });
        });
    }
  }
  

  render() {
    return (
      <Switch>
        <Route 
          exact path='/' 
          render={()=> 
            this.state.devicesData === null
            ? <PlaceHolderComponent/>
            : <PhoneListContainer phoneData={this.state.devicesData}   /> } 
        />
        <Route 
          path='/:id' 
          render={(props)=> <PhoneDetailComponent 
            phoneData={this.state.devicesData}
            match={props.match}
          />}
        />
      </Switch>
      
    );
  }
}

export default App;
