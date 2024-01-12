import React from 'react';
import CenteredPage from '../../components/surfaces/centered-page';
import { useAppSelector } from '../../redux/history/store';
import PokemonCardHistory from '../../components/surfaces/card/pokemon-card/history';
import { ColumnFlow } from './index.css';
import Button from '../../components/inputs/button';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../redux/history/history-slice';

export default function History() {
  const searches = useAppSelector((state) => state.history.searches);
  const dispatch = useDispatch();

  return (
    <CenteredPage>
      <ColumnFlow>
        <Button onClick={() => dispatch(clearHistory())}>Clear History</Button>
        {searches.map((history) => <PokemonCardHistory {...history} key={`${history.id}-${history.dateSearched}`}/>)}

        {searches.length === 0 && <>No Pokemon searches found!</>}
      </ColumnFlow>
    </CenteredPage>
  )
}