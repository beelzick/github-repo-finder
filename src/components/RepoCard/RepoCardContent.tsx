import { VFC } from 'react'
import styles from './RepoCard.module.css'
import BoxLeft from './BoxLeft/BoxLeft'
import BoxRight from './BoxRight/BoxRight'

interface Repo {
    repo: Node
}

const RepoCardContent: VFC<Repo> = ({ repo }) => {
    const {
        url,
        description,
        name,
        stargazerCount,
        owner: { avatarUrl, login },
        watchers: { totalCount },
        updatedAt,
        repositoryTopics: { nodes },
        forkCount
    } = repo

    return (
        <div className={styles.contentContainer}>
            <BoxLeft
                name={name}
                url={url}
                avatarUrl={avatarUrl}
                stargazerCount={stargazerCount}
                forkCount={forkCount}
                watchers={totalCount}
            />
            <BoxRight
                name={name}
                url={url}
                description={description}
                login={login}
                topics={nodes}
                lastUpdate={updatedAt}
            />
        </div>
    )
}

export default RepoCardContent