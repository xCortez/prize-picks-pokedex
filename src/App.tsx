import React, { useEffect, useState } from 'react';
import './App.css';
import CenteredPage from './components/surfaces/centered-page';
import PokemonSearchForm from './components/forms/pokemon-search';

function App() {
  return (
    <CenteredPage>
      <PokemonSearchForm />
    </CenteredPage>
  );
}

export default App;
