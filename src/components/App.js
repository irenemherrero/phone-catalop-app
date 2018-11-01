import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';
import PlaceHolderComponent from './PlaceholderComponent';
import { Route, Switch } from 'react-router-dom';
import store from '../store';

class App extends Component {
  constructor(){
    super();
    this.state = {
      phoneData: null,
    }
    store.subscribe(() => {
        this.setState({
            phoneData: store.getState().devicesData,
        })
    })
  }
  componentDidMount(){
  // if(JSON.parse(localStorage.getItem('savedPhonesData'))){
  //   const savedPhonesData = JSON.parse(localStorage.getItem('savedPhonesData'));
  //   this.setState({
  //     devicesData: savedPhonesData,
  //   })
  // } else {
    fetch('https://my-json-server.typicode.com/irenemherrero/demo/devices/')
        .then(response => {
          return response.json();
        })
        .then(json=>{
          console.log(json);
          // localStorage.setItem('savedPhonesData', JSON.stringify(json));
          store.dispatch({
            type: "UPDATE_STATE",
            devicesData: json,
          })
        });
    // }
  }
  

  render() {
    console.log(this.state.phoneData);
    return (
      <Switch>
        <Route 
          exact path='/' 
          render={()=> 
            this.state.phoneData === null
            ? <PlaceHolderComponent/>
            : <PhoneListContainer /> 
          } 
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
