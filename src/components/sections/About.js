import React from "react"
import styled from "styled-components"
import {Button} from "./header"
import { Section, Container } from "../global"

const About = () => (
  <SectionDark>
     
      <StyledContainer>
      
      
    
      <Card>
      <CardHeader> For <GreenText>Creators</GreenText> from <BlueText>Creators</BlueText>  </CardHeader>
          <CardBody>
     
            <p>
           We do short interviews with artists that successfuly managed to sell their NFTs. Learn about:
            </p>
            <List>
            <ListItem>Their story </ListItem>
            <ListItem> How do they marketed they work</ListItem>
            <ListItem>Challenges they faced</ListItem>
            <ListItem>Their advice for other creators.</ListItem>
            </List>
            </CardBody>

            </Card>
         {/*   <Card>
      <CardHeader> For <BlueText>Investors</BlueText> </CardHeader>
          <CardBody>
            <p>
            Place to discover interesting NFT projects early and their creators.
            <List>
            <ListItem>Find potential projects early. </ListItem>
            <ListItem>Learn more about the artists and their motivations.</ListItem>
            <ListItem>Find links to buy on different platforms</ListItem>              
            <ListItem>Get special offers and drops. </ListItem> 
            </List>
            </p>
            </CardBody>

            </Card>
         */}

 
     </StyledContainer>
    
  </SectionDark>
)

export default About



const SectionDark=styled(Section)`
background-color:#0F1320;
padding:80px 80px;
width:100%;
color:white;

`
const Title=styled.h2`
 text-align: center;
 padding:16px;
`
const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
align-items: center; 


`

const Flex = styled.div`
  
  display: flex;
   justify-content: space-between;
  color:white;
  flex-wrap: wrap;
  padding:0 16px;
  @media (max-width: ${props => props.theme.screen.sm}) {

    justify-content:center;
  }
 // @media (max-width: ${props => props.theme.screen.md}) {
  //  grid-template-columns: 2fr;
   // grid-gap: 80px;
 // }
  
  `

export const Card = styled.div`
  flex: 0 1 calc(48% - 1em);
  line-height:24px; 
  padding: 0 0;
  background-color:#171B29;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex: 1 1 1;
    min-width:310px;
    margin-bottom:16px;
   
  }
  

`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  opacity: 0.7;
  font-size:17px;
`;
export const CardHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

 const GreenText=styled.span`
 color:#22A75D;
 text-decoration: underline;

 `

 const BlueText=styled.span`
 color:#2278D4;
 text-decoration: underline;

 `
const List=styled.ul`
   list-style-type: square;
  padding: 0;
  margin-left:16px;

`
const ListItem=styled.li`
  padding: 5px 10px;
  

`
