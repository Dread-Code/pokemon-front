import { gql } from '@apollo/client'

const USER_REGISTER = gql`
  mutation UserRegisterMutation($input: UserInput) {
    userRegister(input: $input) {
      name
      username
      email
      id
      createAt
    }
  }
`
export default USER_REGISTER
