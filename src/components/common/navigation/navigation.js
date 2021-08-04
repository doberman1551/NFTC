import * as React from "react"
import PropTypes from "prop-types"

import { useStaticQuery} from "gatsby"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"



const Navigation = () => {
const data= useStaticQuery(graphql`
query Logo{
file(relativePath: {eq: "logo.png"}) {
  childImageSharp {
    gatsbyImageData(layout:CONSTRAINED quality:100 )
    }
  
}
}
`)

return(
<Nav>
<LogoContainer>
<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
</LogoContainer>
</Nav>

)
  


}
export default Navigation


const Nav=styled.nav`

padding:1em 1em;


;
`

const LogoContainer=styled.div`
   display: flex;
    justify-content: space-between;
    height:90px;

}
`