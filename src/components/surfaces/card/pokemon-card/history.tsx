import React from 'react';

import Avatar from '../../../data-display/avatar';
import Card from '..';
import { AvatarAndContent, HistoryLink, ContentColumn, Identifier, Stats } from './index.css';
import { HistoryEntry } from '../../../../redux/history/history-slice/schema';
import { format } from 'date-fns';

function IdentifierTreatment({ label, value }: { label: string, value: React.ReactNode }) {
  const titleizedLabel = label[0].toUpperCase() + label.substring(1);

  return <Identifier><strong>{titleizedLabel}</strong>: {value}</Identifier>
}

export default function PokemonCardHistory({ id, name, sprite, dateSearched }: HistoryEntry) {
  const formattedDate = format(dateSearched, "MM/dd/yy 'at' h:mm:ss a");

  return (
    <HistoryLink to={`/pokemon/${id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <AvatarAndContent>
          <Avatar imageSrc={sprite} />
          <ContentColumn>
            <IdentifierTreatment label="id" value={id} />
            <IdentifierTreatment label="name" value={name} />
            <IdentifierTreatment label="searched on" value={formattedDate} />
          </ContentColumn>
        </AvatarAndContent>
      </Card>
    </HistoryLink>
  );
}