// /src/components/ListComponent.tsx
import React from 'react';
import { Character } from '../types';

interface Props {
  data: Character[];
}

const ListComponent: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((character) => (
        <li key={character.id}>
          <img src={character.image} alt={character.name} style={{ width: 50, height: 50, marginRight: 10 }} />
          {character.name}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
