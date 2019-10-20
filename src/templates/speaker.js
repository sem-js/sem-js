import React from "react"
import Moment from "react-moment"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


function createMarkup(html) {
  html = html.replace(/<\s*script[^>]*>(.*?)<\s*\/\s*script>/g, '');
  return {__html: html};
}

export default function Speaker({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  
  return (
    <Layout>
    <SEO title="Speaker" />
    {data.meetupGroup.events.filter((event) => {return event.id === pageContext.eventId}).map(
        (event, index) => {
          let date = new Date(event.time)
          let status = event.yes_rsvp_count < event.rsvp_limit
          let duration = event.duration / 1000 / 60 / 60;
          return(
           <div key={event.id}>
             <h1>{event.name}</h1>
             <div className="date">
                <Moment format="dddd, MMMM DD, YYYY">
                  {date.toString()}
                </Moment>
             </div>
             <div className="event-status">Event Status: {(status) ? 'Open' : 'Filled'}</div>
             <h2>Details</h2>
             <div dangerouslySetInnerHTML={createMarkup(event.description)} />
             <div className="full-length">Talk Time: {(duration % 1 === 0) ? duration + ' hours' : (duration * 60) + ' minutes' }</div>
           </div>
          )
        }
    )}
    <Link to="/">Home</Link>
  </Layout>
  )
}

export const query = graphql`
  query Speakers($eventId: String!) {
    meetupGroup(events: {elemMatch: {id: {eq: $eventId}}}) {
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
        yes_rsvp_count
        rsvp_limit
        duration
      }
    }
  }
`