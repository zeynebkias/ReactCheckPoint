import React from 'react'
import styled from 'styled-components';


const Divstyle = styled.div`
display : flex;
text-align : center;
gap: 0.5rem;
justify-content: center;


`;

const Inputstyle = styled.input`
margin-top : 1.2rem;

`;

const Textstyle = styled.a`
text-decoration: none;`

function Agree() {
    return (
        <Divstyle>
            <Inputstyle type="checkbox" />
            <p>I read and agree to <Textstyle href="">Terms & Conditions</Textstyle></p>
        </Divstyle>
    )
}

export default Agree
