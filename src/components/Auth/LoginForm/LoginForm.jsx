import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setToken, decodeToken } from '../../../utils/token/token'
import LOGIN from '../../../gql/User/login'
import useAuth from '../../../hooks/useAuth'
import './LoginForm.scss'

const initialValues = () => ({
  email: '',
  password: ''
})

const LoginForm = () => {
  const [error, setError] = useState('')

  const [login] = useMutation(LOGIN)
  const { setUser } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email('Your email is not valid').required('Your email is required'),
      password: Yup.string().required()
    }),
    onSubmit: async formData => {
      setError('')
      try {
        const { data } = await login({
          variables: {
            input: formData
          }
        })
        const { token } = data.login
        setToken(token)
        setUser(decodeToken(token))
      } catch (e) {
        setError(e.message)
      }
    }
  })

  return (
    <>
      <h2 className="login-form-title">Hi There!</h2>
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />
        <Button className="btn-submit" type="submit">
          Log in
        </Button>
        {error && <p className="submit-error">{error}</p>}
      </Form>
    </>
  )
}

export default LoginForm
