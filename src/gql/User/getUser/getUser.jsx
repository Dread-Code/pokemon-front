import { gql } from '@apollo/client'

const GET_USER = gql`
  query Query($id: ID, $username: String) {
    getUser(id: $id, username: $username) {
      name
      username
      email
      description
    }
  }
`
export default GET_USER
