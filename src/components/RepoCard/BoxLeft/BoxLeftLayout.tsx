import styles from '../RepoCard.module.css'
import { ReactNode, VFC } from 'react'


interface Props {
    avatar: ReactNode
    stars: ReactNode
    btn: ReactNode
    forks: ReactNode
    watchers: ReactNode
}

const BoxLeftLayout: VFC<Props> = ({ avatar, stars, btn, forks, watchers }) => {
    return (
        <div className={styles.leftBox}>
            {avatar}
            {stars}
            {forks}
            {watchers}
            <div style={{ flexGrow: 1 }} />
            {btn}
        </div>
    )
}

export default BoxLeftLayout