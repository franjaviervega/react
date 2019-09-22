import React, { Component } from 'react';
import { getAll } from '../../services/hero.service';

class FormularioUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lista: getAll(),
            estado: 1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAdd = this.handleChangeAdd.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ value: event.target.value.toUpperCase() });

    }
    handleChangeAdd(event) {
        const { lista } = this.state;
        this.setState({ value: event.target.value });
        this.setState({ value: event.target.value.toUpperCase() });

        const source = { name: 'Fco', race: 'Full', age: '199', weapon: 'Staff 🏑' };
        const newdata = source;
        this.setState({ lista: newdata });
        this.setState({ estado: 0 });

        console.log(lista);
        //Object.assign(lista, source);
        //alert(lista);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { lista } = this.state;
        return (
            <div count>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add new player:
                    <input type="text" value={this.state.value} onChange={this.handleChangeAdd} />
                    </label>
                    <input type="submit" value="Add" />
                    {this.state.estado}
                </form>
            </div>
        );
    }
}

export default FormularioUsuario; 