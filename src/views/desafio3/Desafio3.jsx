import React, { Component, useContext } from 'react';

import { getAll } from '../../services/hero.service';
import './Desafio3.css';
import Content from '../../components/content/Content';
import Context from './../../context/Contex'

import Button from '../../components/button/Button';

import Table from './../../components/table/Table';
import Thead from './../../components/table/Thead';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Tbody from './../../components/table/Tbody';
import Texto from './../../components/texto/Texto'


import FormularioUsuario from './../../components/formularioUsuario/FormularioUsuario'

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
            btnring: "btn btn-primary",
            btnkill: "btn btn-danger",
            ring: true,
            estilo: "kill",
            textImput: 'Search Hero',
            lista: getAll(),
            anillo: 'anilloV',  //value anilloV y el name se define en el imput anillo
            kill: 'killV',
            count: 0,
            verformulario: false,
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

    handleChangeAdd = event => {
        //this.setState({ value: event.target.value });
        //this.setState({ value: event.target.value.toUpperCase() });
        this.setState({ [event.target.name]: event.target.value });

        this.setState({verformulario: true});

        /*const { lista } = this.state;
        const newdata = { name: 'ssss', race: 'Maia', age: '2019', weapon: 'Staff 🏑' };
        lista.push(newdata);*/
    }

    handleSubmit = event => {
        this.setState({ [event.target.name]: event.target.value });
        const { lista } = this.state;
        const newdata = {name: this.state.name, race: this.state.race, age: this.state.age, weapon: this.state.weapon};
        lista.push(newdata);
        //debugger
    }

    render() {
        const {lista, searchImput, textImput, anillo, kill, ring, age } = this.state;
        
        return (

            <Content className="index">

                <h2>Fellowship of the Ring</h2>
                <Content className="container">
                    <Content className="search_input">
                        <input value={this.searchImput} placeholder={textImput} />
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
                    <hr></hr>


                    <form>
                        Add new player:<br />
                        <Table>
                            <Tr>
                                <Td>Name: </Td>
                                <Td>
                                    <input type="text" name="name" value={this.state.value} onChange={this.handleChangeAdd} />
                                </Td>
                            </Tr><Tr>
                                <Td>Race: </Td>
                                <Td>
                                    <input type="text" name="race" value={this.state.value} onChange={this.handleChangeAdd} />
                                </Td>
                            </Tr><Tr>
                                <Td>Age: </Td>
                                <Td>
                                    <input type="text" name="age" value={this.state.value}  onChange={this.handleChangeAdd}/>
                                </Td>
                            </Tr><Tr>
                                <Td>Weapon: </Td>
                                <Td>
                                    <input type="text" name="weapon" value={this.state.value} onChange={this.handleChangeAdd} />
                                </Td>
                            </Tr>
                        </Table>
                        <button type="button" onClick={this.handleSubmit}>Login</button>
                    </form>
                </Content>
            </Content>
        );
    }


}
export default Desafio3;
