import React from 'react';
import { Row } from 'reactstrap';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div>
            <Row>
                <a href=""><p>회사소개 |</p></a>
                <a href=""><p>의뢰하기 |</p></a>
                <a href=""><p>이용약관 |</p></a>
                <a href=""><p>개인정보처리방침</p></a>
            </Row>
            <Row>
                <h3>오성부동산</h3>
                <p>주소 : 대표자 : 사업자 번호 : 부동산 번호 :</p>
                <p>주소 : 대표자 : 사업자 번호 : 부동산 번호 :</p>
                <p>오성부동산 © All rights reserved {year}</p>
            </Row>
        </div>
    )
}

export default Footer
