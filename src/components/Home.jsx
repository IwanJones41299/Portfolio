import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';

const Home = () => {
    if(isMobile || isTablet ){
        return(
            <h1>Mobile Home</h1>
        )
    }else{
        return(
            <h1>Browser Home</h1>
        )
    }
}

export default Home
