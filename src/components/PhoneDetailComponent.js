import React, { Component } from 'react';

class PhoneDetailComponent extends Component {
    render() { 
        const id=this.props.match.params.id;
        const idNumber=parseInt(id);
        const phoneDataFromProps=this.props.phoneData;
        let deviceToShow;
            if (phoneDataFromProps !== null) {
                deviceToShow = this.props.phoneData[idNumber];
                localStorage.setItem('savedDevice', JSON.stringify(deviceToShow));
            } else {
                const savedDevice = JSON.parse(localStorage.getItem('savedDevice'))
                deviceToShow = savedDevice;
            }
        const {
                title, 
                image,
                bands,
                camera,
                color,
                cpu,
                dimensions,
                system,
                price,
                ram,
                screen,
                sim,
                weight,
                languages,
            }=deviceToShow;

        return ( 
            <div className="detail-data-container">
                <div className="detail-data-container-primary">
                    <h2 className="phone-title">{title}</h2>
                    <img className="phone-image" src={image} alt={title}/>
                    <p className="phone-color">{color}</p>
                    <p className="phone-price">{price}</p>
                </div>
                <div className="detail-data-container-secondary">
                    <h3>Detalles:</h3>
                    <p>SIM: {sim}</p>
                    <p>CPU: {cpu}</p>
                    <p>Sistema operativo: {system}</p>
                    <p>RAM: {ram}</p>
                    <p>Peso: {weight}</p>
                    <p>Tamaño: {dimensions}</p>
                    <p>Idiomas:</p>
                        <ul className="list-detail"> 
                        {languages !== null
                        ? languages.map((language, index) => {
                            return(
                                <li className="list-item-detail" key={index}>{language}</li>
                            )
                        })
                        : null}
                        </ul>
                    <p>Bandas:</p>
                        <ul className="list-detail longline">
                        {bands.map((band, index) => {
                            return(
                                <li className="list-item-detail" key={index}>{band}</li>
                            )
                        })}
                        </ul>
                    <p>Pantalla:</p>
                        <ul className="list-detail">
                            {screen.map((screenDetail, index) => {
                                return(
                                    <li className="list-item-detail" key={index}>{screenDetail}</li>
                                )
                            })}
                        </ul>
                    <p>Cámara:</p>
                        <ul className="list-detail">
                            {camera.map((cameraDetail, index) => {
                                return(
                                    <li className="list-item-detail" key={index}>{cameraDetail}</li>
                                )
                            })}
                        </ul>
                </div> 
            </div>
         );
    }
}
 
export default PhoneDetailComponent;