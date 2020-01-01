import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList';
import Shades from './Shades';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from "./Page";

const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
class App extends Component{
  state = {
    format: 'hex',
    palettes: savedPalettes || seedColors
  }
  handleFormatChange = (format) => {
    this.setState({format});
  }
  savePalette = (newPalette) => {
    console.log("newPalette:", newPalette);
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    this.setState(st => ({ palettes: [...st.palettes, newPalette]}), this.syncLocalStorage);
  }
  handlePaletteDelete = (id) => {
    this.setState(st => ({ palettes: st.palettes.filter(p => p.id !== id)}), this.syncLocalStorage)
  }
  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }
  render(){
    const {palettes} = this.state;
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
          > 
            <Switch location={location}>
              <Route
                exact 
                path='/' 
                render={(routeProps) => 
                  <Page>
                    <PaletteList 
                      palettes={palettes} 
                      {...routeProps} 
                      handleDelete={this.handlePaletteDelete} /> 
                  </Page>
                }
              />
              <Route
                exact
                path='/palette/new'
                render={(routeProps) => 
                  <Page>
                    <NewPaletteForm 
                      palettes={palettes} 
                      savePalette={this.savePalette} 
                      {...routeProps} />
                  </Page>
                }
              />
              <Route 
                exact 
                path='/palette/:id' 
                render={(routeProps) => 
                  <Page>
                    <Palette 
                      {...generatePalette(palettes.find(s => s.id === routeProps.match.params.id))}/>
                  </Page>
                } 
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps) => 
                  <Page>
                    <Shades
                      {...routeProps}
                      {...generatePalette(palettes.find(s => s.id === routeProps.match.params.paletteId))} />
                  </Page>
                }
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    );
  }
}

export default App;
