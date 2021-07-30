import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import useAuth from '../../../hooks/useAuth'
import ModalUpload from '../../Modal/ModalUpload'
import GET_USER from '../../../gql/User/getUser'
import './RightHeader.scss'

export default function RightHeader() {
  const [showModal, setShowModal] = useState(false)

  const { username } = useAuth().auth

  const { data, loading, eror } = useQuery(GET_USER, {
    variables: { username }
  })

  const handleShowModal = () => {
    setShowModal(true)
  }

  if (loading || eror) return null
  const { getUser } = data

  return (
    <>
      <div className="right-header">
        <Link to="/">
          <Icon name="home" />
        </Link>
        <Icon name="plus" onClick={handleShowModal} />
        <Link to={`/${username}`}>
          <h3>{getUser.username}</h3>
        </Link>
      </div>
      <ModalUpload showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
