import { gql } from '@apollo/client'

const LOGIN = gql`
  mutation LoginMutation($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`
export default LOGIN
