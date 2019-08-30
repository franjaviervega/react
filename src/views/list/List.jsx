import React, { Component } from 'react';

import Table from './../../components/table/Table';
import Thead from './../../components/table/Thead';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Tr from './../../components/table/Tr';
import Tbody from './../../components/table/Tbody';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'Batman' },
                { id: 2, name: 'Chito' },
                { id: 3, name: 'Clara' },
                { id: 4, name: 'Kuki' },
                { id: 5, name: 'Pepa' },
            ],
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className="lista">
                lista superheroes
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element) => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    }
}

/*
render() {
        const {data} = this.state;
        return (
            <div className="list">
                lista test
                {data.map((element,index) => (
                    <li key={element.id}>Id: {element.id} es {element.name}</li>
                ))
                }
        </div>
        )

    }
*/

export default List;