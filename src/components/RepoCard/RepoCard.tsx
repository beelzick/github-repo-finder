import RepoCardContent from './RepoCardContent';
import styles from './RepoCard.module.css'
import { VFC } from 'react';

interface Repo {
    repo: { node: Node }
}

const RepoCard: VFC<Repo> = ({ repo }) => {
    const { node } = repo

    return (
        <div className={styles.card}>
            <RepoCardContent
                repo={node}
            />
        </div>
    )
}

export default RepoCard