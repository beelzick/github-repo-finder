import { gql } from '@apollo/client';

export const SEARCH_REPOS = gql`
query SearchRepos ($query: String!, $cursor: String) {
    search(first: 15, query: $query, type: REPOSITORY, after: $cursor) {
        repositoryCount
        edges {
            node {
                ... on Repository {
                    name
                    description
                    owner {
                        login
                        avatarUrl
                    }
                    stargazerCount
                    url
                    forkCount
                    repositoryTopics(first: 5) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                    }
                    updatedAt
                    watchers {
                        totalCount
                    }
                }
        }
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}
`