import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        {data.meetupGroup.events.filter((event) => {return event.name.search(/STUDY GROUP/) < 0}).map(
          (event) => (
            
            <li key={event.id}><Link to={'/speaker/' + event.id}>{event.name}</Link></li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
{
  meetupGroup {
    events {
      id
      name
      venue {
        address_1
        address_2
        city
        name
        state
        zip
      }
      time
      description
      visibility
    }
  }
}
`
