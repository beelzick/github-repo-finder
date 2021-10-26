import Topic from './Topic'
import { VFC } from 'react'
import TopicsContainer from './TopicsContainer'
import { v4 as uuidv4 } from 'uuid'

interface TopicsProp {
    topics: Array<RepositoryTopic>
}

const Topics: VFC<TopicsProp> = ({ topics }) => {
    return (
        <TopicsContainer>
            {topics.map(topic => (
                <Topic key={uuidv4()} topicName={topic.topic.name} />
            ))}
        </TopicsContainer>
    )
}

export default Topics