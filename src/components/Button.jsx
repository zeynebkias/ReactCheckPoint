import React from 'react'
import styled from 'styled-components';





const Mybutton = styled.button`
font-family: Montserrat;
font-weight : bold;
font-size : 12px;
width: 30%;
border : none;
border-radius : 20px;
background-color: #8729E2;
color : white;
padding : 12px;
cursor: pointer;


`;

const Textstyle = styled.a`
text-decoration: none;`
 
function Button() {
    return (
        <div>
            <Mybutton>CREATE ACCOUNT</Mybutton>

            <p>Already have an account? <Textstyle href="">Sign in</Textstyle></p>
        </div>
    )
}

export default Button
