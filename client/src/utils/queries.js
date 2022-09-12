import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
  me {
    username
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;