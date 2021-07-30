import React, { useState, useEffect } from 'react'
import { Search as SearchSU } from 'semantic-ui-react'
import { size } from 'lodash'
import { useQuery } from '@apollo/client'
import SEARCH_POKEMON from '../../../gql/pokemon/searchPokemon'
import './Search.scss'
import ResultSearch from './ResultSearch'

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
    if (size(data?.search) > 0) {
      const users = []
      data.search.forEach((user, index) => {
        users.push({
          key: index,
          title: user.name,
          username: user.username,
          avatar: user.avatar
        })
      })
      setResults(users)
    } else {
      setResults([])
    }
  }, [data])

  const handleResultSelect = () => {
    setSearch(null)
    setResults([])
  }

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
