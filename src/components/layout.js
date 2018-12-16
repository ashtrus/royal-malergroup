import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './header'
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
                content: 'This is a sample website for the Gatsby crash course',
              },
              { name: 'keywords', content: 'gatsby, react, tutorial' },
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
         </>
       )}
     />
)
