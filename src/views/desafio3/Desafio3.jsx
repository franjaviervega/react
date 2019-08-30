import React, { Component } from 'react';

import { getAll } from '../../services/hero.service';
import './Desafio3.css';

import Tarjeta from './../../components/tarjeta/Tarjeta'


import './Desafio3.css';
import Content from '../../components/content/Content';

import Button from '../../components/button/Button';

import Table from '../../components/table/Table';
import Thead from '../../components/table/Thead';
import Td from '../../components/table/Td';
import Th from '../../components/table/Th';
import Tr from '../../components/table/Tr';
import Tbody from '../../components/table/Tbody';
import Card from '../../components/card/Card';

/**
 * Componente primer desafio clase React
 * @version 1.0
 * @author Francisco Vega
 */

class Desafio3 extends Component {

    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            typeRing: '',
            stateRing: false,
            codigoChile: '+569',
            searchImput: '',
            textImput: 'Search Hero',
            lista: getAll(),
            anillo: 'anilloV',  //value anilloV y el name se define en el imput anillo
            kill: 'killV',
            count: 0,
        };
    }

    handleOnSelect = (event) => {
        const { name, value } = event.target;  //DIFERENCIAS ENTRE SET Y STATE Y TARGET
        this.setState({ [name]: value });

        this.setState({ searchImput: value });
        //this.setState({prevState.count - 1})


        //alert(value);
    }


    render() {
        const { lista, searchImput, textImput, anillo, kill, typeRing, stateRing, codigoChile } = this.state;
        return (

            <Content className="index">
                <h2>Desafio 3</h2>
                <Content className="container">
                    
                    <Tarjeta name="Francisco" telefono={codigoChile +" 929292229"} edad="33">Informacion adicional</Tarjeta>
                </Content>
            </Content>
        );
    }


}
export default Desafio3;

//<Button title={'Use Ring'} type={typeRing} event={()=> (this.handleOnSelect(e))} state={stateRing}></Button>
//HIDROLOTIO CORPORAL SENSITIVE DISPENSADOR AIRLESS 200 ML (GLICERINA POLIDOCANIL)