// src/components/__tests__/PokemonCard.test.tsx

import { render } from '@testing-library/react';
import PokemonCard from '../PokemonCard';
import { BrowserRouter } from 'react-router-dom';

test('ポケモンカードが正しくレンダリングされる', () => {
  const pokemon = {
    name: 'bulbasaur',
    url: '<https://pokeapi.co/api/v2/pokemon/1/>',
    japaneseName: 'フシギダネ',
  };

  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <PokemonCard pokemon={pokemon} />
    </BrowserRouter>
  );

  expect(getByText('フシギダネ')).toBeInTheDocument();
  expect(getByAltText('フシギダネ')).toBeInTheDocument();
});
