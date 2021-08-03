import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'
import ImageNotFound from '../../../../assets/png/avatar.png'

const ResultSearch = ({ data }) => {
  const { avatar, title, pokemonType } = data
  return (
    <div className="search-users__item">
      <Image src={avatar || ImageNotFound} />
      <div>
        <p>{title}</p>
        <p>{pokemonType}</p>
      </div>
    </div>
  )
}

ResultSearch.propTypes = {
  data: PropTypes.object.isRequired
}

export default ResultSearch
