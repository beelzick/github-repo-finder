import { ReactNode, VFC } from 'react'

interface Children {
    children: ReactNode
}

const TopicsContainer: VFC<Children> = ({ children }) => {
    return (
        <div style={{ marginBottom: '8px' }}>
            {children}
        </div>
    )
}

export default TopicsContainer