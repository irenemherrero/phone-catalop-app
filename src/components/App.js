import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer';
import PhoneDetailComponent from './PhoneDetailComponent';
import PlaceHolderComponent from './PlaceholderComponent';
import { Route, Switch } from 'react-router-dom';
import store from '../store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      devicesData: null,
    }

    //Suscribing to update App state when data has been saved in store after fetch.

    store.subscribe(() => {
      this.setState({
        devicesData: store.getState().devicesData,
      });
    });
  }

  //Fetching data from server
  //Saving data in local storage (not to call unnecesary times to server)
  //Save data from server in store
  //Catching errors

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/irenemherrero/demo/devices/')
      .then(response => {
        return response.json();
      })
      .then(json => {
        localStorage.setItem('savedPhonesData', JSON.stringify(json));
        store.dispatch({
          type: "UPDATE_STATE",
          devicesData: json,
        });
      })
      .catch(error => {
        console.log(`Ha sucedido un error: ${error}`);
      });
  }

  //Routing to have different routes in the SPA

  render() {
    return (
      <Switch>
        <Route
          exact path='/'
          render={() =>
            this.state.devicesData === null
              ? <PlaceHolderComponent />
              : <PhoneListContainer />
          }
        />
        <Route
          path='/:id'
          render={(props) =>
            <PhoneDetailComponent match={props.match} />
          }
        />
      </Switch>
    );
  }
}

export default App;
