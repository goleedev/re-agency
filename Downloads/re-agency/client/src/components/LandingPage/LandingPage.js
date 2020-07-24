import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';

import { Row } from 'reactstrap';
import './LandingPage.css';

function LandingPage() {
    return (
        <div>
            <Navigation />
            <Row>
                <ProductCard />    
            </Row>
            <Footer />
        </div>
    )
}

export default LandingPage
