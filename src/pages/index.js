import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-bootstrap/dist/react-bootstrap.min.js'

import Slider from '../components/slider'
import Services from '../components/services'
import ProjectList from '../components/projects'
import AboutUs from '../components/about-us'
import OurOffer from '../components/our-offer'
import OurMaterials from '../components/our-materials'

const IndexPage = () => (
  <Layout>
    <Slider />
    <Services />
    <ProjectList />
    <AboutUs />
    <OurOffer />
    <OurMaterials />
  </Layout>
)

export default IndexPage
