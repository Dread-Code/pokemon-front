import React, { useState } from 'react'
import { Container, Image } from 'semantic-ui-react'

import Logo from '../../assets/png/pokemon-57-logo.png'
import LoginForm from '../../components/Auth/LoginForm'
import RegisterForm from '../../components/Auth/RegisterForm'
import './Auth.scss'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <Container fluid className="auth">
      <Image src={Logo} />
      <div className="container-form">
        {showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin} />}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              Don't you have account yet?
              <span role="button" onClick={() => setShowLogin(!showLogin)}>
                Sign in
              </span>
            </>
          ) : (
            <>
              Use your Pokémon57 account
              <span role="button" onClick={() => setShowLogin(!showLogin)}>
                Log in
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  )
}
