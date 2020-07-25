import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';

import { Row } from 'reactstrap';
import './LandingPage.css';
import MainImage from '../MainImage/MainImage';

function LandingPage() {
    return (
        <div className="landing__container">
            <Navigation />
            <MainImage />
            <Row>
                <ProductCard />    
            </Row>
            <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default LandingPage
