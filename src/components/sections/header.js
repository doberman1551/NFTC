import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "../global"
import BackgroundImage from "gatsby-background-image"

import About from "./About"




const Header = (props) => {

  const handleScroll=()=> {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    })};


    const data= useStaticQuery(graphql`
    query Nft {
      file(relativePath: {eq: "nft.png"}) {
        childImageSharp {
          fluid(webpQuality: 90, quality: 100) {
            sizes
            src
          }
        }
      }
    }
`)

let StyledImg = styled(props => <Img {...props}/>)`
perspective: 1500px;
perspective-origin: left center;
overflow: visible !important;
height: 150%;
width:80%;
picture, img {
  transform: rotateY(-25deg) rotateX(15deg);
  box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
  border-radius: .625rem;
  transition: 1s !important;
  &:hover {
    transform: rotateY(-35deg) rotateX(15deg);
  }
}
` 

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
   
    <HeaderWrapper id="top">
     
     
     <ContainerT>
        <Flex>
    

        <HeaderTextGroup>
          <Text>
        
            <Title>
              Discover the NFTs of Tomorrow.
            </Title>

            <Subtitle>Be an early explorerd and discover upcoming exciting NFT projects. Get to know the artists. </Subtitle>
           <Button onClick={handleScroll}> Learn More </Button>
           
            </Text>
              
          </HeaderTextGroup>
          <ImgContainer>
          <StyledImg fluid={data.file.childImageSharp.fluid} objectFit="contain" objectPosition="right top"/>  
         
          </ImgContainer>
          
        </Flex>
      
        </ContainerT>
      
    </HeaderWrapper>
   
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  padding: 16px 0 120px 0;
  position: relative;
  width:100%;

  
  @media (max-width: ${props => props.theme.screen.md}) {
  }

`
const Subtitle = styled.h5`
  font-size: 24px;
  
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 16px;
  padding:16px;
`
const Title=styled.h1`
font-size:52px;
color:white;
`

const ContainerT=styled(Container)`
height:70vh;

display: flex;
justify-content: center;
align-items: center; 

`

const HeaderTextGroup = styled.span`
  
  padding-right:1rem;
  


   div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
 
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 16.5px 33px;
  vertical-align: middle;
  margin:0,auto;
  width: 12rem;
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  background-image: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);
  color: white;
  text-decoration: none;
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(74,75,77,1);
    transform: scale(1.05);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }

`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: start;
  padding:80px;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const ImgContainer = styled.div`
margin-top:-3rem;
padding:0;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
const Text=styled.span`

  color:white;

`
