import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($description: String!, $title: String!, $bookId: String) {
  saveBook(description: $description, title: $title, bookId: $bookId) {
    username
    savedBooks {
      bookId
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    savedBooks {
      bookId
    }
  }
}
`;
