import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

const SecondPage = () => (
  <Layout>
    <SEO title="Sponsorships" />
    <h1>SEM.js Sponsorships</h1>
    <p>SEM.js loves supporting developers in Southeast, Michigan.  However it takes time and resources which we rely on from local businesses like you!</p>
    <h2>Available Opportunities</h2>
    <p>We have the following needs each month:</p>
      <ul>
          <li>
            <strong>Meeting Space: </strong>
            Can provide meeting space for up to 120 engineers with an area to accommodate food.
          </li>
          <li>
            <strong>Food: </strong>
            Everyone knows that nothing gets developers productive and thinking like food.
          </li>
        </ul>
    <h2>How your company benefits!</h2>
    <p>Sponsors receive the following benefits:</p>
    <ul>
      <li>Job listings that are published with the meetup info pages</li>
      <li>2-3 minutes to pitch your company and its opportunities</li>
      <li>Priority listings for job inquiries through <a href="mailto:jobs@semjs.org">jobs@semjs.org</a></li>
    </ul>
    <h3>Interested? Fill out our form below <Emoji symbol="👇" label="Pointing Down"/></h3>
    <div>
      .... FORM TO GO HERE ....
      <br />
      <br />
    </div>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage
