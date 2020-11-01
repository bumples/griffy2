import React, { Component } from 'react'
import { StaticQuery, graphql} from 'gatsby'

import Layout from '../component/layout'

const getMarkdownPosts = graphql`
{
    allMarkdownRemark {
        totalCount
        edges {
            node{
                id
                frontmatter {
                    title
                    data
                }
                except
            }
        }
    }
}
`
export default () => (
    <Layout>
        <div>
            <h1 style={{ display: 'inlineBlock', borderBottom: '1px sold' }}>
                bumples block</h1>
                <StaticQuery
                query={getMarkdownPosts}
                render={data => (
                    <>
                    <h4>{data.allMarkdownRemark.totalCount}Posts</h4>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <h3>{node.frontmatter.title}
                                <span style={{ color:
                            '#bbb'}}>- {node.frontmatter.date}</span>
                            </h3>
                                <p>{node.except}</p>

                        </div>
                    ))}
                    </>
                )}
                />
        </div>
    </Layout>
)
