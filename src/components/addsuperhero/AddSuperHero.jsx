import React, { useState } from 'react';
import Content from '../content/Content';

const isDisabled = (n, r, a, w) => {
    return n === '' || r === '' || a < 0 || a > 100 || w === '';
}

const ListSuperHero = function (props) {
    const [nombre, setNombre] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState(0);
    const [weapon, setWeapon] = useState('');  

    return (
        <div>
        <form>
            <label>Nombre</label>
            <input name="nombre" type="text" value={nombre} onChange={(event) => { setNombre(event.target.value); }} />
            <br />
            <label>Raza</label>
            <input name="race" type="text" value={race} onChange={(event) => { setRace(event.target.value); }} />
            <br />
            <label>Edad</label>
            <input name="age" type="number" min="0" value={age} onChange={(event) => { setAge(event.target.value); }} />
            <br />
            <label>Arma</label>
            <input name="weapon" type="text" value={weapon} onChange={(event) => { setWeapon(event.target.value); }} />
            <br />
            <button
                disabled={isDisabled(nombre, race, age, weapon)}
                onClick={(event) => {
                    event.preventDefault();
                    const hero = {
                        name: nombre,
                        age: age,
                        weapon: weapon,
                        race: race,
                    };

                    setNombre('');
                    setRace('');
                    setAge(0);
                    setWeapon('');

                    props.onAddNewHero(hero);
                }}>Add</button>
        </form>
        </div>
    );
}

export default ListSuperHero;