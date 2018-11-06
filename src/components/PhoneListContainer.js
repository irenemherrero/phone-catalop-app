import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../store";

class PhoneListContainer extends Component {
  constructor() {
    super();
    this.state = {
      devicesData: store.getState().devicesData
    };
  }

  render() {
    return (
      <ul className="container-list-phones">
        {this.state.devicesData.map(phone => {
          return (
            <li key={phone.id} className="phone-container">
              <Link to={`/${phone.id}`}>
                <h2 className="phone-title">{phone.title}</h2>
                <img
                  className="phone-image"
                  src={phone.image}
                  alt={phone.title}
                />
                <p className="phone-description">{phone.description}</p>
                <p className="phone-color">{phone.color}</p>
                <p className="phone-price">{phone.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PhoneListContainer;
