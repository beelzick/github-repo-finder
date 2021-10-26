declare interface ComponentData {
    __typename?: string
    name?: string
    stargazerCount?: number
    description?: string
    url?: string
    avatarUrl?: string
    login?: string
    forkCount?: number
    watchers?: number
    topics?: Array<RepositoryTopic>
    lastUpdate?: string
}

declare interface Owner {
    avatarUrl: string
    login: string

}

declare interface Watchers {
    totalCount: number
}

declare interface RepositoryTopic {
    topic: { name: string }
}

declare interface Node {
    description: string
    name: string
    stargazerCount: number
    url: string
    owner: Owner
    updatedAt: string
    watchers: Watchers
    repositoryTopics: { nodes: Array<RepositoryTopic> }
    forkCount: number
}

declare interface Edge {
    node: Node
}

declare interface PageInfo {
    endCursor: string
    hasNextPage: boolean
}

declare interface InitialData {
    edges: Array<Edge>
    pageInfo: PageInfo
    repositoryCount: number
}


declare interface PropsInitial {
    query: string
    initialData: InitialData
}

declare interface Data {
    data: { search: InitialData }
}
