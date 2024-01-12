import React from 'react';
import Card from '..';
import { Pokemon } from '../../../../api/pokemon/schema';
import Avatar from '../../../data-display/avatar';
import { AvatarAndContent, CardWrapper, Footer, ContentColumn, Identifier, Stat, Stats } from './index.css';

function IdentifierTreatment({ label, value }: { label: string, value: React.ReactNode }) {
  const titleizedLabel = label[0].toUpperCase() + label.substring(1);

  return <Identifier><strong>{titleizedLabel}</strong>: {value}</Identifier>
}

export default function PokemonCard({ pokemonData }: { pokemonData:  Pokemon }) {
  const abilities = pokemonData.abilities.map((ability) => ability.ability.name ).join(', ');
  const types = pokemonData.types.map((type) => type.type.name ).join(', ')
  const gameVersions = pokemonData.game_indices.map((index) => index.version.name).join(', ');

  return (
    <>
      <Card>
        <CardWrapper>
          <AvatarAndContent>
            <Avatar imageSrc={pokemonData.sprites.front_default} />
            <ContentColumn>
              <IdentifierTreatment label="id" value={pokemonData.id} />
              <IdentifierTreatment label="name" value={pokemonData.name} />
              <IdentifierTreatment label="height" value={pokemonData.height} />
              <IdentifierTreatment label="weight" value={pokemonData.weight} />
            </ContentColumn>
            <ContentColumn>
              <IdentifierTreatment label="abilities" value={abilities} />
              <IdentifierTreatment label="types" value={types} />
              <IdentifierTreatment label="base experience" value={pokemonData.base_experience} />
            </ContentColumn>
          </AvatarAndContent>

          <Footer>
            <Stats>
              {pokemonData.stats.map(
                (stat) => {
                  return (
                    <Stat>
                      <IdentifierTreatment label={stat.stat.name} value={stat.base_stat} />
                    </Stat>
                  )
                }
              )}
            </Stats>
            <IdentifierTreatment label="Game versions present in" value={gameVersions} />
          </Footer>
        </CardWrapper>
      </Card>
    </>
  );
}