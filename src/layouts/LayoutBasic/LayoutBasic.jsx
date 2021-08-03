import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'

export default function LayoutBasic({ children }) {
  return (
    <>
      <Header />
      <Container className="layout-basic">{children}</Container>
    </>
  )
}

LayoutBasic.propTypes = {
  children: PropTypes.element.isRequired
}
