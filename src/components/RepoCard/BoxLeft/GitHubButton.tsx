import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import { VFC } from 'react'

interface Url {
    url: string
}

const GitHubButton: VFC<Url> = ({ url }) => {
    return (
        <Button variant='contained' size='small' href={url} endIcon={<GitHubIcon sx={{ mb: 0.2 }} />}>
            Show
        </Button>
    )
}

export default GitHubButton