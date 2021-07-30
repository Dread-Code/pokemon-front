import { gql } from '@apollo/client'

const SEARCH_POKEMON = gql`
  query Query($search: String) {
    searchPokemon(search: $search) {
      name
      img
      pokemonType
      healthPoints
      description
      power
    }
  }
`
export default SEARCH_POKEMON
