import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/png/pokemon-57-logo.png'
import RightHeader from './RightHeader/RightHeader'
import Search from './Search/Search'
import './Header.scss'

const Header = () => (
  <div className="header">
    <Container>
      <Grid verticalAlign="middle">
        <Grid.Column width={4} className="header__logo">
          <Link to="/">
            <Image src={Logo} alt="pokemon-57-logo" size="medium" />
          </Link>
        </Grid.Column>
        <Grid.Column width={9} className="buscador">
          <Search />
        </Grid.Column>
        <Grid.Column width={3}>
          <RightHeader />
        </Grid.Column>
      </Grid>
    </Container>
  </div>
)

export default Header
