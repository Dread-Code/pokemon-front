import React, { useState, useEffect } from 'react'
import { Search as SearchSU } from 'semantic-ui-react'
import { size } from 'lodash'
import { useQuery } from '@apollo/client'
import SEARCH_POKEMON from '../../../gql/pokemon/searchPokemon'
import ResultSearch from './ResultSearch'
import './Search.scss'

export default function Search() {
  const [search, setSearch] = useState(null)
  const [results, setResults] = useState([])

  const { data, loading } = useQuery(SEARCH_POKEMON, {
    variables: { search }
  })

  const onChange = e => {
    if (e.target.value.length) {
      setSearch(e.target?.value)
    }
    if (e.target.value.length === 0) {
      setSearch(null)
    }
  }

  useEffect(() => {
    if (size(data?.searchPokemon) > 0) {
      const pokemons = []
      data.searchPokemon.forEach((pokemon, index) => {
        pokemons.push({
          key: index,
          title: pokemon.name,
          pokemonType: pokemon.pokemonType,
          avatar: pokemon.img
        })
      })
      setResults(pokemons)
    } else {
      setResults([])
    }
  }, [data])

  const handleResultSelect = () => {
    setSearch(null)
    setResults([])
  }
  console.log(data)
  return (
    <SearchSU
      className="search-users"
      fluid
      input={{ icon: 'search', iconPosition: 'left' }}
      loading={loading}
      value={search || ''}
      onSearchChange={onChange}
      results={results}
      resultRenderer={e => <ResultSearch data={e} />}
      onResultSelect={handleResultSelect}
    />
  )
}
