import Link from '@mui/material/Link'
import { VFC } from 'react'

interface Name {
    name: string
    url: string
}

const RepoName: VFC<Name> = ({ name, url }) => {
    return (
        <Link variant='h5' mb={0.2} color='#58a6ff' underline='hover' href={url} sx={{ overflowWrap: 'anywhere' }}>
            {name}
        </Link>
    )
}
export default RepoName