import React from 'react';
import './App.css';
import CenteredPage from './components/surfaces/centered-page';
import TextInput from './components/inputs/text-input';
import Button from './components/inputs/button';
import { Pokedex } from './components/inputs/text-input/index.css';
import pokedexIcon from './assets/pokedex-icon.png'

function App() {
  return (
    <CenteredPage>
      <TextInput>
        <>
          <Button>
          <Pokedex src={pokedexIcon}/>Search</Button>
        </>
      </TextInput>
    </CenteredPage>
  );
}

export default App;
