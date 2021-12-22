import React from 'react';
import styled from 'styled-components';


const Myinput = styled.input`
border : none;
box-shadow : 0px 0px 20px 5px #C2E6F4;
padding : 10px;
padding-left : 50px;
width : 50%;
margin : 10px;
border-radius : 50px;


`

const Mydiv = styled.div`

position :relative;


`


const Myicon = styled.img`
height: 1.5rem;
position : absolute;
margin-top: 1rem;
margin-left: 1rem;

`;

function Form({icon, placeholder,type}) {
    return (
        <Mydiv>
        <Myicon src={icon} />
        <Myinput placeholder={placeholder} type={type}/>
        </Mydiv>
    )
}

export default Form
