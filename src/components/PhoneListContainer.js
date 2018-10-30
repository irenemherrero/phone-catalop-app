import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PhoneListContainer extends Component {
    render() { 
        console.log(this.props);
        const phoneData = this.props.phoneData;
        return ( 
            <ul className="container-list-phones">
                {phoneData.map(phone => {
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