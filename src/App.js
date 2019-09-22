import React from 'react';
import './App.css';

import Context from './context/Contex'  //CONTEXT desafio3


import Desafio3 from './views/desafio3/Desafio3';
import { getAll } from './services/hero.service';
import AddSuperHero from './components/addsuperhero/AddSuperHero'
import ListSuperHero from './components/listsuperhero/ListSuperHero'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      counter: 1,
      listaSuper: getAll(),
      btnRing: true,
    };
    this.addNewHeroToList = this.addNewHeroToList.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.removeHeroFromList = this.removeHeroFromList.bind(this);
    this.handleKill = this.handleKill.bind(this);
    
  }

  addNewHeroToList(hero) {
    const currentList = this.state.listaSuper;
    const counter = this.state.counter;
    currentList.push({
      ...hero,
      id: counter,
    });
    this.setState({
      listaSuper: this.state.listaSuper,
      counter: counter + 1,
    });
  }

  handleOnSelect (hero){
    const { listaSuper } = this.state;
    
    const newdata = listaSuper.filter(r => r !== hero);
    this.setState({ 
      listaSuper: newdata,
      btnRing: false,
    });
    alert(hero.name + " Desaparecerá de la lista");
  }

  handleKill (hero) {
    alert(hero.name + " al final de la lista");
    const { listaSuper } = this.state;
    const datakill = hero;
    datakill["kill"] = true;
    console.log(datakill);
    const newdata = listaSuper.filter(r => r !== hero);
    newdata.push(datakill);
    this.setState({ listaSuper: newdata });
};

  removeHeroFromList(id) {
    const currentList = this.state.listaSuper;
    const newList = currentList.filter(e => e.id !== id);
    this.setState({
      listaSuper: newList,
    });
  }


  render() {
    return (
      <Context.Provider value={this.state.listaSuper}>

        <ListSuperHero
          onhandleOnSelect={this.handleOnSelect}
          onRemoveHero={this.removeHeroFromList}
          onHandleKill={this.handleKill}
          btnRing={this.state.btnRing}
        />
        <AddSuperHero
          onAddNewHero={this.addNewHeroToList}
        />
      </Context.Provider>


    );
  }

}

export default App;

