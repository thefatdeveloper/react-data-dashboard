// PageContainer.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { debounce } from 'lodash';
import SearchForm from '../components/SearchForm';
import ListComponent from '../components/ListComponent';
import { GET_CHARACTERS_QUERY } from '../graphql/queries';
import { Character } from '../types';

interface CharacterResults {
  characters: {
    results: Character[];
  };
}

const PageContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounce search term update to limit query execution
  const debouncedSetSearchTerm = useCallback(
    debounce((newTerm: string) => setSearchTerm(newTerm), 300),
    [],
  );

  const { loading, error, data } = useQuery<CharacterResults>(GET_CHARACTERS_QUERY, {
    variables: { name: searchTerm },
  });

  // Handler for search term changes, passed to the SearchForm
  const handleSearchChange = (term: string) => {
    debouncedSetSearchTerm(term);
  };

  return (
    <div>
      <SearchForm
        onSearchChange={handleSearchChange}
        onFilterChange={() => {}} // Placeholder for filter change logic
        options={[]} // Placeholder for actual options, assuming you might add filters later
      />

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {!loading && !error && data && (
        <ListComponent data={data.characters.results} />
      )}
    </div>
  );
};

export default PageContainer;
