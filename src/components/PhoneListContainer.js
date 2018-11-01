import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import store from '../store';

class PhoneListContainer extends Component {
    constructor(){
        super();
        this.state = {
            phoneData: store.getState().devicesData,
        }
        store.subscribe(() => {
            this.setState({
                phoneData: store.getState().devicesData,
            })
        })
    }

    render() { 
        console.log(this.state.phoneData);
            return ( 
            <ul className="container-list-phones">
                {this.state.phoneData.map(phone => {
                    return(
                        <li key={phone.id} className="phone-container">
                            <Link to={`/${phone.id}`}>
                                <h2 className="phone-title">{phone.title}</h2>
                                <img className="phone-image" src={phone.image} alt={phone.title}/>
                                <p className="phone-description">{phone.description}</p>
                                <p className="phone-color">{phone.color}</p>
                                <p className="phone-price">{phone.price}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
         );
    }
}
 
PhoneListContainer.propTypes = {
    phoneData: PropTypes.array,
};

export default PhoneListContainer;