import React from 'react';
import './Card.css';
import Boton from '../boton'; 

/**
 * Componente presentacional de tipo funcional para desplegar un card
 * 
 * @author Claudio Rojas <claudio.dcv(a)gmail.com>
 * @version 1.0.0 
 * @param {object} props - contenedor de propiedades del componente
 * @param {string} props.title - titlo del card
 * @param {string} props.footer - propiedad tipo string para mostrar en pie de card
 * @param {JSX.Element} props.children - contenido JXS de un card
 * @returns {JSX.Element}
 */
const Card = ({ title, footer, children, propiedadtest }) => (
    <div className="card">
        <div className="card__header">0{title} </div>  
        <div className="card__content">1{children} cuerpo de CARDaaa</div>
        <div className="card__footer">2{footer}</div>
        <div>{propiedadtest}</div>
    
        <Boton></Boton>
    </div>

    
        
);

export default Card;