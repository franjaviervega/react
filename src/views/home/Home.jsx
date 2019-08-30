import React, { Component } from 'react';
import Card from './../../components/card/Card';
import Boton from '../../components/boton';

import { getAll } from '../../services/hero.service';
import './Home.css';


/**
 * Componente basado en clase, utilizado como vista en una aplicacion
 * 
 * @version 1.0.0
 * @author Claudio Rojas <claudio.dcv(a)gmail.com>
 */
class Home extends Component {

    constructor(props) {  //PARA QUE SE USA EL CONSTRUCTOR??? para definir propiedades 
        super(props);     //ESTA SENTENCIA SIEMPRE DEBE IR???? si es para pasarle informacion al padre

        this.state = {
            username: 'hola',
            password: '*****',
            tarea: '',
            lista: ["PRIMERA TAREA"], 
        };

    }

    /**
     * Metodo generico manejador de evento cambio para inputs
     * @param {HTMLElement} event - evento default al realizar un cambio de estado en un elemento input
     * @returns {undefined}
     */
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    /**
     * Metodo manejador de evento click para boton que agrega tareas al array lista
     * @returns {undefined}
     */
    handleAddTask = () => {
        const { tarea, lista } = this.state;
        lista.push(tarea);
        this.setState({
            lista,
            tarea: ''
        });
    }

    render() {
        const { boton} = this.props;
        const { parametroEjemplo } = this.props;
        const { altura } = this.props;
        const { username, password, lista, tarea } = this.state;
        return (
            <div>
                <div><h5>Titulo definido en app.js: {parametroEjemplo}</h5></div>
                <div><h3>La altura es: {altura}</h3></div>
                <Card title="Titulo" footer="El pie" ><br></br>

                    <input value={username} onChange={this.handleOnChange} name="username" />
                    <input value={password} onChange={this.handleOnChange} name="password" />
                    <input value={tarea} onChange={this.handleOnChange} name="tarea" />


                    <br></br><button onClick={this.handleAddTask}>
                        AGREGAR TAREA
                    </button>

                    <br></br>primera username: {username}
                    <br></br>Segunda  pass:  {password}

                    {lista.map((e, i) => (<div key={i}>{e}</div>))}

                </Card>

                <Boton title="titulo en render de home">
                    <input type="text"></input>
                </Boton>
            </div>  
        );
    }
}

export default Home;

//{lista.map((e, i) => (<div key={i}>{e}</div>))}