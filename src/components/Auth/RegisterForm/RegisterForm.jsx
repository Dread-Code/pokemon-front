import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'
import USER_REGISTER from '../../../gql/User/userRegister/userRegister'
import './RegisterForm.scss'

function initialValues() {
  return {
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  }
}

const RegisterForm = ({ setShowLogin }) => {
  const [register] = useMutation(USER_REGISTER)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required('Your name is require.'),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/, 'The username could not have spaces.')
        .required('Your username is require.'),
      email: Yup.string().email('Your email is not valid.').required('Your email is require'),
      password: Yup.string()
        .required('Your password is require')
        .oneOf([Yup.ref('repeatPassword')], 'Your password are not equal.'),
      repeatPassword: Yup.string()
        .required('Your password is require')
        .oneOf([Yup.ref('password')], 'Your password are not equal')
    }),
    onSubmit: async formData => {
      try {
        const newUser = formData
        delete newUser.repeatPassword
        await register({
          variables: {
            input: newUser
          }
        })
        toast.success('You have been register succesfully')
        setShowLogin(false)
      } catch (error) {
        toast.error(error.message)
        console.log(error.message)
      }
    }
  })

  return (
    <>
      <h2 className="register-form-title">Registrate para ver fotos y videos de tus amigos</h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Full name"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />
        <Form.Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Form.Input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
        />
        <Button className="btn-submit" type="submit">
          Sign in
        </Button>
      </Form>
    </>
  )
}

RegisterForm.propTypes = {
  setShowLogin: PropTypes.func.isRequired
}

export default RegisterForm
