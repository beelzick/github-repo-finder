export const truncate = (description: string) => {
    return (description.length > 120) ? description.slice(0, 119) + '...' : description
}

