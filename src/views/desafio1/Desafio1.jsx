import React, { Component } from 'react';

import { getAll } from '../../services/hero.service';
import './Desafio1.css';


import './Desafio1.css';
import Content from '../../components/content/Content';

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

class Desafio1 extends Component {

    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            searchImput: '',
            textImput: 'Search Hero',
            lista: getAll(),
        };
    }


    render() {
        const { lista, searchImput, textImput } = this.state;
        return (
            <Content className="index">
                <h2>Fellowship of the Ring</h2>
                <Content className="container">
                    <Content className="search_input">
                        <input value={searchImput}  placeholder={textImput}/>
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
                                    <Td>{element.name}</Td>
                                    <Td>{element.race}</Td>
                                    <Td>{element.age}</Td>
                                    <Td>{element.weapon}</Td>
                                    <Td>
                                        <Content className="controls">
                                            <Content>☠ Kill</Content>
                                            <Content>💍 Use Ring</Content>
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
export default Desafio1;