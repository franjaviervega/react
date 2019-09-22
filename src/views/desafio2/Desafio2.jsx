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

import Texto from './../../components/texto/Texto'

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
            typeRing: '',
            stateRing: false,

            btnring: "btn btn-primary",
            btnkill: "btn btn-danger",
            ring: true,
            estilo: "kill",

            botonAnillo: "ANILLO",
            searchImput: '',
            textImput: 'Search Hero',
            lista: getAll(),
            anillo: 'anilloV',  //value anilloV y el name se define en el imput anillo
            kill: 'killV',
            count: 0,
        };
    }

    handleOnSelect = e => {
        //handleOnSelect = event => {
        /*const { name, value } = event.target;  //DIFERENCIAS ENTRE SET Y STATE Y TARGET
        this.setState({ [name]: value });
        this.setState({ searchImput: value });
        */
        const { lista } = this.state;
        const newdata = lista.filter(r => r !== e);
        this.setState({ lista: newdata, ring: false });
        alert(e.name + " Desaparecerá de la lista");
    }

    handleKill = e => {
        alert(e.name + " Muere");
        const { lista } = this.state;
        const datakill = e;
        datakill["kill"] = true;
        console.log(datakill);
        const newdata = lista.filter(r => r !== e);
        newdata.push(datakill);
        this.setState({ lista: newdata });
    };


    render() {
        const { lista, searchImput, textImput, anillo, kill, typeRing, stateRing, botonAnillo, ring } = this.state;
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
                            {lista.map((element, i) => (
                                <Tr key={i}>
                                    {element.kill ? 
                                    <Td> <Texto > {element.name} </Texto></Td> : <Td> {element.name} </Td>
                                    }
                                    <Td> {element.kill ? <Texto> {element.race}   </Texto> : element.race}   </Td>
                                    <Td> {element.kill ? <Texto> {element.age}    </Texto> : element.age}    </Td>
                                    <Td> {element.kill ? <Texto> {element.weapon} </Texto> : element.weapon} </Td>
                                    
                                    <Td>
                                        <Content className="controls">
                                            <Content>
                                                <Button title="☠ Kill" estilo={this.state.btnkill} value={kill} name="kill" event={() => (this.handleKill(element))}>
                                                </Button>

                                            </Content>
                                            <Content >
                                                {ring ?
                                                    <Button estilo={this.state.btnring} title="💍 Use Ring" value={anillo} name="anillo" event={() => (this.handleOnSelect(element))}>
                                                    </Button>
                                                    : ""}
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

/**
 *
*       <Td>{element.name}</Td>
        <Td>{element.race}</Td>
        <Td>{element.age}</Td>
        <Td>{element.weapon}</Td>
 */