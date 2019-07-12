import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Landing from "../components/landing"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
  </Layout>
)

export default IndexPage
