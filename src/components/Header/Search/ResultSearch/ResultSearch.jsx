import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'
import ImageNotFound from '../../../../assets/png/avatar.png'

const ResultSearch = ({ data }) => {
  const { avatar, title, username } = data

  return (
    <>
      <Image src={avatar || ImageNotFound} />
      <div>
        <p>{title}</p>
        <p>{username}</p>
      </div>
    </>
  )
}

ResultSearch.propTypes = {
  data: PropTypes.object.isRequired
}

export default ResultSearch
