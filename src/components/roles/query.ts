import gql from 'graphql-tag';

export const QUERY_ROLE_LIST = gql`
    query RoleList {
      roles {
        id
        parentId
        name
        description
        parent {
          id
          parentId
          name
          description
        }
      }
    }
`;