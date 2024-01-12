import React from 'react';
import Card from '..';
import { Pokemon } from '../../../../api/pokemon/schema';
import Avatar from '../../../data-display/avatar';
import { AvatarAndContent, CardWrapper, Footer, ContentColumn, Identifier, Stat } from './index.css';

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
              <Identifier>id: {pokemonData.id}</Identifier>
              <Identifier>Name: {pokemonData.name}</Identifier>
              <Identifier>Height: {pokemonData.height}</Identifier>
              <Identifier>Weight: {pokemonData.weight}</Identifier>
            </ContentColumn>
            <ContentColumn>
              <Identifier>Abilities: {abilities}</Identifier>
              <Identifier>Types: {types}</Identifier>
              <Identifier>base experience: {pokemonData.base_experience}</Identifier>
            </ContentColumn>
          </AvatarAndContent>

          <Footer>
            {pokemonData.stats.map(
              (stat, i) => {
                const breakEvery3 = i > 0 && i % 3 === 0  ? <br /> : <></>;

                return (
                  <Stat>
                    {`${stat.stat.name}: ${stat.base_stat} `}
                    {breakEvery3}
                  </Stat>
                )
              }
            )}
            <Identifier>Game versions present in: {gameVersions}</Identifier>
          </Footer>
        </CardWrapper>
      </Card>
    </>
  );
}