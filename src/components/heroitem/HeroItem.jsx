import React from 'react';

const HeroItem = function (props) {
    return (<tr>
        
        <td>{props.hero.name}</td>
        <td>{props.hero.race}</td>
        <td>{props.hero.age}</td>
        <td>{props.hero.weapon}</td>
        <td>

        </td>
        <td>
            <button onClick={() => {
                props.onRemoveHero(props.hero.id)
            }}>Eliminar</button>

        </td>
        <td>
        {props.btnRing ?
            <button onClick={() => {
                props.onhandleOnSelect(props.hero)
            }}>💍 Use Ring</button>
        : ""}
        </td>
        <td>
        
        
            <button onClick={() => {
                props.onHandleKill(props.hero)
            }}>☠ Kill</button>
        
        
        </td>
    </tr>);
}

export default HeroItem;