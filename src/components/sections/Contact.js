import React from 'react'
import styled from "styled-components"   
import {SiTwitter} from "@react-icons/all-files/si/SiTwitter"
import {HiOutlineMail}  from "@react-icons/all-files/hi/HiOutlineMail"

import { Section } from "../global"



const Contact = () => {
 

    return (
  
      <StyledSection>
        <Title> Sign-up for early-access(Free)</Title>
        <Flex>
        <HeaderForm name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
              <HeaderInput placeholder="Your email" />
              <HeaderButton>Early access</HeaderButton>
        </HeaderForm>
        </Flex>
        <Wrapper>
          
          <SocialLinks>
          <span>
          <a href="https://www.linkedin.com/in/dobromirkotsev/">
          <SiTwitter color="white"/>
          </a>
          &nbsp;</span>
           <a href="mailto:dobromir@nftcompass.xyz?Subject=Some%20subject">
              <HiOutlineMail color="white"/>
            </a>
          </SocialLinks>
        
          </Wrapper>  
        </StyledSection>

              )   
       
    
}
export default Contact;


const StyledSection=styled(Section)`
background-color:#0F1320;
padding:40px;

`
const Flex = styled.div`
  background-color: ${props => props.theme.color.background.dark};
  display:flex;
  background-color:#0F1320;
  justify-content:center;
  align-items:center;
 
`
const BioWrapper=styled.div`
font-size:18px;
color:white;
`
const SocialLinks=styled.div`
  display:flex;
  justify-content: center;
  margin-top:8px;

`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
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
const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background-image: linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%);
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const Title=styled.h2`
color:white;
display: flex;
justify-content: center;`



const Wrapper=styled.div`
padding:16px;
`

