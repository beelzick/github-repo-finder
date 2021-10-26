import { VFC } from 'react'
import styles from '../RepoCard.module.css'
import RepoName from './RepoName'
import MadeBy from './MadeBy'
import Description from './Description'
import Topics from './Topics/Topics'
import LastUpdate from './LastUpdate'

const BoxRight: VFC<ComponentData> = ({ name, url, login, description, topics, lastUpdate }) => {
    return (
        <div className={styles.boxRight}>
            <RepoName name={name} url={url} />
            <MadeBy login={login} />
            <Topics topics={topics} />
            <Description description={description} />
            <div style={{ flexGrow: 1 }} />
            <LastUpdate date={lastUpdate} />
        </div>
    )
}

export default BoxRight