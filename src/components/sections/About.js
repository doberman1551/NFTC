import React from "react"
import styled from "styled-components"
import {Button} from "./header"
import { Section, Container } from "../global"

const About = () => (
  <SectionDark>
     <Title>What does it mean?</Title>
      <StyledContainer>
      
      
      <Flex>
      <Card>
      <CardHeader> For <GreenText>Creators </GreenText> </CardHeader>
          <CardBody>
     
            <p>
            Platform to share what you are working on early and attract investors
            </p>
            <List>
            <ListItem>Market your work before launch. </ListItem>
            <ListItem>Build a community of fans and early adopters.</ListItem>
            <ListItem>Network with investors.</ListItem>
            </List>
            </CardBody>

            </Card>
            <Card>
      <CardHeader> For <BlueText>Investors</BlueText> </CardHeader>
          <CardBody>
            <p>
            Place to discover interesting NFT projects early and their creators.
            <List>
            <ListItem>Find potential projects early. </ListItem>
            <ListItem>Learn more about the artists and their motivations.</ListItem>
            <ListItem>Get special offers.</ListItem>
            </List>
            </p>
            </CardBody>

            </Card>
     
      </Flex>
     </StyledContainer>
  </SectionDark>
)

export default About



const SectionDark=styled(Section)`
background-color:#0F1320;
padding:160px;
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
