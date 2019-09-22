import React, { useContext } from 'react';
import Context from '../../context/Contex';
import HeroItem from './../heroitem/HeroItem';
import Contenedor from './../content/Content'

import Table1 from './../table/Table';
import Thead from './../table/Thead';
import Td from './../table/Td';
import Th from './../table/Th';
import Tr from './../table/Tr';
import Tbody from './../table/Tbody';


const Table = function (props) {
    // lista []
    const context = useContext(Context);
    return (
        <div >
            <Table1 class_name="characters-table">
                <Thead>
                    <Tr className="character-row">

                        <Th>Nombre</Th>
                        <Th>Raza</Th>
                        <Th>Edad</Th>
                        <Th>Arma</Th>
                        <Th />
                    </Tr>
                </Thead>
                <Tbody>
                    {context.map((element, index) => {
                        return (
                            <HeroItem
                                key={index}
                                hero={element}
                                onRemoveHero={props.onRemoveHero}
                                onhandleOnSelect={props.onhandleOnSelect}
                                onHandleKill={props.onHandleKill}
                                btnRing={props.btnRing}

                            />);
                    })}
                    <Td>

                    </Td>
                </Tbody>

            </Table1>
        </div>

    );
}

export default Table;