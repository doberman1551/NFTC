import React from "react"
import styled from "styled-components"
import {Button} from "./header"
import { Section, Container } from "../global"

const About = () => (
  <SectionDark>
      <StyledContainer>
      <Flex>
      <Card>
      <CardHeader> For <GreenText>Creators </GreenText> </CardHeader>
          <CardBody>
          <img src={'../../CreatorsIcon.png'}></img>
            <p>
            Building an NFT that investors find attractive and marketing it to them are the most difficult part. That's why we built a platform to help artist to show off what they are working infront of a community of early-adopters
            </p>
            </CardBody>

            </Card>
            <Card>
      <CardHeader> For <BlueText>Investors</BlueText> </CardHeader>
          <CardBody>
            <p>
            Discover perspective artists and their works early. Learn abou their story and background. Receive exclusive news, bonuses and launch dates.
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
`
const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
align-items: center; 

`

const Flex = styled.div`
  width:100%;
  display: grid;
  color:white;
 justify-content: space-between;
  align-content: center;
  grid-template-columns:1fr 1fr;
  grid-gap:32px;
 
 // @media (max-width: ${props => props.theme.screen.md}) {
  //  grid-template-columns: 2fr;
   // grid-gap: 80px;
 // }
  
  `

export const Card = styled.div`
  overflow: hidden;
  line-height:24px; 
  padding: 0 0;
  background-color:#171B29;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
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


