import React, { Component } from 'react';
import Spinner from '../images/spinner.gif'

class PlaceHolderComponent extends Component {
    render() { 
        return ( 
            <div className="placeholder">
                <img 
                    className="placeholder-spinner" 
                    src={Spinner} 
                    alt='Cargando...'
                />
            </div>
         );
    }
}
 
export default PlaceHolderComponent;