import React from 'react'
import styled from 'styled-components';
import Form from './Form';
import Agree from './Agree';
import Button from './Button';

import User from '../imgs/User.jpg'
import Password from '../imgs/password.jpg'
import Email from '../imgs/Email.jpg'








const Mydiv = styled.div`
display : flex;
flex-direction : column;
gap : 10px;

`



 
function Card(props) {
    return (
        <Mydiv >

        <h1>Sign Up</h1>
        <Form icon={User} placeholder="Name" type="text"/>
        <Form icon={Email} placeholder="Email" type="text"/>
        <Form icon={Password} placeholder="Password" type="text"/>
        <Agree/>
        <Button/>
        </Mydiv> 



    )
}

export default Card
