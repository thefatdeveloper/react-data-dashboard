// /src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;
