import React from 'react'
import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <Container fluid
            tag = "footer"
            className="text-center bg-info text-white text-uppercase p-3"
        >
           &copy; LCO github search appp with firebase 
        </Container>
    )
}

export default Footer;
