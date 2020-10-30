import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection";

const IndexPage = ({data}) => (
  <Layout>
    
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="bumples"
    />
      
        </Layout>
);

export const query = graphql`
{
  img:file(relativePath:{eq:"cover1.png"}){
    childImageSharp{
      fluid{
          ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default IndexPage
