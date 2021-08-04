import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../global"
import BackgroundImage from "gatsby-background-image"

 const BgImage = () => {

    const data=useStaticQuery(
        graphql`
        query Bg{
               file(relativePath: {eq: "bg.png"}) {
                id
                childImageSharp {
                 fluid(maxWidth:1800){
                   ...GatsbyImageSharpFluid
                 }
                 }
              
            
            }
      }
       
        `)
    return (
       <BackgroundImage fluid={data.file.childImageSharp.fluid}>
       </BackgroundImage>
            
    )     
}

export default BgImage;