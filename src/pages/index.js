import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import About from "../components/sections/About"

import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Contact from "../components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
   <Contact/>
  </Layout>
)

export default IndexPage
