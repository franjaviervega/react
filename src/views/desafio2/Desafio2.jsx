import React, { Component } from 'react';

import { getAll } from '../../services/hero.service';
import './Desafio2.css';


import './Desafio2.css';
import Content from '../../components/content/Content';

import Button from '../../components/button/Button';

import Table from './../../components/table/Table';
import Thead from './../../components/table/Thead';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Tbody from './../../components/table/Tbody';

/**
 * Componente primer desafio clase React
 * @version 1.0
 * @author Francisco Vega
 */

class Desafio2 extends Component {

    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            typeRing:'',
            stateRing: false,

            botonAnillo: "ANILLO",
            searchImput: '',
            textImput: 'Search Hero',
            lista: getAll(),
            anillo: 'anilloV',  //value anilloV y el name se define en el imput anillo
            kill: 'killV',
            count: 0,
        };
    }

    handleOnSelect = (event) => {
        /*const { name, value } = event.target;  //DIFERENCIAS ENTRE SET Y STATE Y TARGET
        this.setState({ [name]: value });
        this.setState({ searchImput: value });
        */

        alert(event.name);
    }


    render() {
        const { lista, searchImput, textImput, anillo, kill, typeRing, stateRing,botonAnillo } = this.state;
        return (
            <Content className="index">
                <h2>Fellowship of the Ring</h2>
                <Content className="container">
                    <Content className="search_input">
                        <input value={searchImput} placeholder={textImput} />
                    </Content>

                    <Table class_name="characters-table">
                        <Thead>
                            <Tr className="character-row">
                                <Th>Name</Th>
                                <Th>Race</Th>
                                <Th>Age</Th>
                                <Th>Weapon</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {lista.map((element) => (
                                <Tr className="character-row" key={element.id}>
                                    <Td>
                                        {this.state.count} - 
                                        {element.name}
                                    </Td>
                                    <Td>{element.race}</Td>
                                    <Td>{element.age}</Td>
                                    <Td>{element.weapon}</Td>
                                    <Td>
                                        <Content className="controls">
                                            <Content>
                                                <button value={kill} name="kill" onClick={this.handleOnSelect}>
                                                    ☠ Kill
                                                </button>
                                            </Content>
                                            <Content >
                                                <Button title="💍 Use Ring" value={anillo} name="anillo" event={()=> (this.handleOnSelect(element))}>
                                                    
                                                </Button>
                                                
                                            </Content>
                                        </Content>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Content>
            </Content>
        );
    }


}
export default Desafio2;

//<Button title={'Use Ring'} type={typeRing} event={()=> (this.handleOnSelect(e))} state={stateRing}></Button>
//HIDROLOTIO CORPORAL SENSITIVE DISPENSADOR AIRLESS 200 ML (GLICERINA POLIDOCANIL)