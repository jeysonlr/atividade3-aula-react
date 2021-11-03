import { gql } from '@apollo/client';

const IssuesQ = gql`
query Issues ($querySelectedUser: String!, $repoName: String! ) {
  repositoryOwner(login: $querySelectedUser) {
    id
    repository(name: $repoName) {
      issues (first: 10 ){
        nodes {
          id
          title
          body
          resourcePath
        }
      }
    }
  }
}
`;

export default IssuesQ;