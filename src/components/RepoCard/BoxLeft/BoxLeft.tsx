import Avatar from '@mui/material/Avatar'
import GitHubButton from './GitHubButton'
import GitCount from './GitCount'
import BoxLeftContainer from './BoxLeftLayout'
import { VFC } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styles from './BoxLeft.module.css'
import { GoRepoForked } from 'react-icons/go'
import { IoMdEye } from 'react-icons/io'

const BoxLeft: VFC<ComponentData> = ({ name, avatarUrl, stargazerCount, url, forkCount, watchers }) => {
    return (
        <BoxLeftContainer
            avatar={<Avatar alt={`Owner of: ${name}`} src={avatarUrl} />}
            stars={
                <GitCount
                    count={stargazerCount}
                    icon={<StarBorderIcon className={styles.icon} />}
                />
            }
            forks={
                <GitCount
                    count={forkCount}
                    icon={<GoRepoForked className={styles.icon} />}
                />
            }
            watchers={
                <GitCount
                    count={watchers}
                    icon={<IoMdEye className={styles.icon} />}
                />
            }
            btn={<GitHubButton url={url} />}
        />
    )
}

export default BoxLeft