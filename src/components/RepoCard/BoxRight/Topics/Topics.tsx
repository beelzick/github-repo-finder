import Topic from './Topic'
import { VFC } from 'react'
import TopicsContainer from './TopicsContainer'

interface TopicsProp {
    topics: Array<RepositoryTopic>
}

const Topics: VFC<TopicsProp> = ({ topics }) => {
    return (
        <TopicsContainer>
            {topics.map(topic => (
                <Topic topicName={topic.topic.name} />
            ))}
        </TopicsContainer>
    )
}

export default Topics