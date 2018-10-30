import React, { Component } from 'react';

class PhoneListContainer extends Component {
    render() { 
        console.log(this.props);
        const phoneData = this.props.phoneData;
        return ( 
            <div className="container-list-phones">
                {phoneData.map(phone => {
                    return(
                        <div key={phone.id} className="phone-container">
                            <h2 className="phone-title">{phone.title}</h2>
                            <img className="phone-image" src={phone.image} alt={phone.title}/>
                            <p className="phone-description">{phone.description}</p>
                            <p className="phone-color">{phone.color}</p>
                            <p className="phone-price">{phone.price}</p>
                        </div>
                    )
                })}
            
            </div>
         );
    }
}
 
export default PhoneListContainer;