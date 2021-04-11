import React from 'react';
import { Container } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';


const Footer = () => {
    if(isMobile || isTablet ){
        return(
            <Container className="text-center footer" >
                <h5>Copyright &copy; Iwan Jones 2021</h5>
            </Container>
        )
    }else{
        return(
            <Container className="text-center footer" >
                <h5>Copyright &copy; Iwan Jones 2021</h5>
            </Container>
        )
    }
}

export default Footer
