import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import './index.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Royal Malergroup homepage.',
            },
            {
              name: 'keywords',
              content: 'gatsby, react',
            },
          ]}
        />
        <Menu siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)
