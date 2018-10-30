import React, { Component } from 'react';

class PhoneDetailComponent extends Component {
    render() { 
        const id=this.props.match.params.id;
        const idNumber=parseInt(id);
        console.log(this.props.phoneData[idNumber]);
        console.log(id);
        const {
                title, 
                image,
                description,
                bands,
                camera,
                color,
                cpu,
                dimensions,
                os,
                price,
                ram,
                screen,
                sim,
                weight,
                languages,
            }=this.props.phoneData[id];

        return ( 
            <div className="detail-data-container">
                <div className="detail-data-container-primary">
                    <h2 className="phone-title">{title}</h2>
                    <img className="phone-image" src={image} alt={title}/>
                    <p className="phone-description">{description}</p>
                    <p className="phone-color">{color}</p>
                    <p className="phone-price">{price}</p>
                </div>
                <div className="detail-data-container-secondary">
                    <p>SIM: {sim}</p>
                    <p>CPU: {cpu}</p>
                    <p>Sistema operativo: {os}</p>
                    <p>RAM: {ram}</p>
                    <p>Peso: {weight}</p>
                    <p>Tamaño: {dimensions}</p>
                    <p>Idiomas:</p>
                        <ul>
                        {languages.map((language, index) => {
                            return(
                                <li key={index}>{language}</li>
                            )
                        })}
                        </ul>
                    <p>Bandas:</p>
                        <ul>
                        {bands.map((band, index) => {
                            return(
                                <li key={index}>{band}</li>
                            )
                        })}
                        </ul>
                    <p>Pantalla:</p>
                        <ul>
                            {screen.map((screenDetail, index) => {
                                return(
                                    <li key={index}>{screenDetail}</li>
                                )
                            })}
                        </ul>
                    <p>Cámara:</p>
                        <ul>
                            {camera.map((cameraDetail, index) => {
                                return(
                                    <li key={index}>{cameraDetail}</li>
                                )
                            })}
                        </ul>
                </div> 
            </div>
         );
    }
}
 
export default PhoneDetailComponent;