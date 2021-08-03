import { gql } from '@apollo/client'

const POKEMON_REGISTER = gql`
  mutation PokemonRegisterMutation($input: PokemonInput) {
    pokemonRegister(input: $input) {
      id
    }
  }
`
export default POKEMON_REGISTER
