import { GetServerSideProps } from 'next';
import PageContainer from '../../src/components/PageContainer/PageContainer';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import RepoCard from '../../src/components/RepoCard/RepoCard'
import React, { VFC, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SEARCH_REPOS } from '../../src/helpers/apolloQueries'
import { v4 as uuidv4 } from 'uuid'
import client from '../../lib/apolloClient'
import RepoCardSkeletons from '../../src/components/RepoCard/Skeleton/RepoCardSkeletons'
import NoData from '../../src/components/NoData/NoData';
import Head from 'next/head'

const Index: VFC<PropsInitial> = ({ query, initialData }) => {
    const { edges, pageInfo: { endCursor, hasNextPage }, repositoryCount } = initialData
    const [repos, setRepos] = useState(edges)
    const [nextCursor, setNextCursor] = useState(endCursor)
    const [hasMore, setHasMore] = useState(hasNextPage)

    useEffect(() => {
        if (initialData) {
            setRepos(edges)
            setNextCursor(endCursor)
            setHasMore(hasNextPage)
        }
    }, [initialData])

    const handleFetchMore = async () => {
        const { data }: Data = await client.query({
            query: SEARCH_REPOS,
            variables: {
                query,
                cursor: nextCursor
            }
        })
        if (data) {
            const { search: { edges, pageInfo: { endCursor, hasNextPage } } } = data
            setRepos((prevValue) => ([...prevValue, ...edges]))
            setNextCursor(endCursor)
            setHasMore(hasNextPage)
        }
    }

    return (
        <>
            <Head>
                <title>{`Search results for "${query}"`}</title>
                <meta name='description' content={`Search results for "${query}". GitHub Repo Finder.`} />
            </Head>
            <PageContainer>
                <Typography variant='h4' component='h1' mb={3} color='#c9d1d9'>
                    Results for "{query}" ({repositoryCount})
                </Typography>
                <Grid container>
                    <InfiniteScroll
                        dataLength={repos.length}
                        hasMore={hasMore}
                        next={handleFetchMore}
                        loader={<RepoCardSkeletons />}
                        style={{ overflow: 'hidden' }}
                    >
                        {repos && repos.map((repo: any) => (
                            <RepoCard key={uuidv4()} repo={repo} />
                        ))}
                    </InfiniteScroll>
                </Grid>
                {!repos[0] && (
                    <NoData />
                )}
            </PageContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context.params
    const { data } = await client.query({
        query: SEARCH_REPOS,
        variables: {
            query
        }
    })

    return {
        props: {
            query,
            initialData: data.search
        }
    }
}

export default Index