import React from 'react';
import './MainImage.css';
import { Row, Col, InputGroup, Button, Input, InputGroupAddon } from 'reactstrap';

function MainImage() {
    return (
        <Row>
            <Col className="main__left">
                <h1 className="main__title">관심 매물 찾아보기</h1>
                <InputGroup className="main__form">
                    <Input type="text" name="search" id="search" placeholder="관심 지역 또는 매물 번호를 입력해주세요" />
                    <InputGroupAddon addonType="append">
                        <Button>검색</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
            <Col>
                <img className="main__img" src={require("../../images/For sale (5).gif")} />            
            </Col>
        </Row>
    )
}

export default MainImage
