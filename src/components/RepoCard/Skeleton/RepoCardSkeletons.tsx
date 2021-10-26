import styles from '../RepoCard.module.css'
import { v4 as uuidv4 } from 'uuid'
import BoxLeftLayout from '../BoxLeft/BoxLeftLayout'
import AvatarSkeleton from './AvatarSkeleton';
import StatsSkeleton from './StatsSkeleton';
import ButtonSkeleton from './ButtonSkeleton';
import NameSkeleton from './NameSkeleton';
import MadeBySkeleton from './MadeBySkeleton';
import DescriptionSkeleton from './DescriptionSkeleton';
import LastUpdateSkeleton from './LastUpdateSkeleton';
import TopicsSkeleton from './TopicsSkeleton';
const skeletons = [...Array(15).keys()].map(i => i + 1);

const RepoCardSkeletons = () => {
    return (
        <>
            {skeletons.map(() => (
                <div className={styles.card} key={uuidv4()}>
                    <div className={styles.contentContainer}>
                        <BoxLeftLayout
                            avatar={<AvatarSkeleton />}
                            stars={<StatsSkeleton />}
                            forks={<StatsSkeleton />}
                            watchers={<StatsSkeleton />}
                            btn={<ButtonSkeleton />}
                        />
                        <div className={styles.boxRight}>
                            <NameSkeleton />
                            <MadeBySkeleton />
                            <TopicsSkeleton />
                            <DescriptionSkeleton />
                            <div style={{ flexGrow: 1 }} />
                            <LastUpdateSkeleton />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RepoCardSkeletons