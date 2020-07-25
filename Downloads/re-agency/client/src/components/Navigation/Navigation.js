import React, { useState } from 'react';

import { FaYoutubeSquare } from 'react-icons/fa';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Navigation.css';
  
const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="nav__container">
            <Navbar color="light" light expand="md">
                <NavbarBrand id="nav__logo" href="/">오성 부동산</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto nav__list" navbar>
                    <NavItem>
                    <NavLink href="/components/">오성부동산 소개</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href=""><FaYoutubeSquare /> 오성부동산</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        매물
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        주택
                        </DropdownItem>
                        <DropdownItem>
                        상가
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        아파트
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            <div>
                <a href="tel:010-2459-8058" className="nav__round top">
                    <img src="https://image.flaticon.com/icons/svg/3043/3043946.svg" alt="call" />
                    <p>전화 상담</p>
                </a>
                <a className="nav__round">
                    <img src="https://lh3.googleusercontent.com/proxy/AO8L9wyHMT4Hy0PN9Pm2MZPr2FHiaNa7MBJGIyIvhF_HOZJFiqBDnCzL808Ikky5q0Gk3agceT6WuCb_mGSz0Qn83qHW3My9c3R0Lt6Nxby1roqDOTXciKnsdwDjDYJ_arcuH7Jj5CBdn2slnqc_TDwqo1HXUC89_6xLywlMkwgyjett3ChcaiPVitGk-DLHAUZyANqKY__MZSzXJPSwdGWtyxFGyxLs0nuwvLF00EjaQzLvwvHSKgfta7dh7A-NpdE0sMj-kqn_HTA0KC-EMtY7BJh_GJlnfAomuxlnr-QwUCOSO6fcfu1V2A5NMgD4Y49jboQp-qSNPgV9IHpHFjOvqsn_Ddrkzdxb--y6ega1LKYuow" alt="kakao" />
                    <p>오픈 채팅</p>
                </a>
            </div>
        </div>
    )
}

export default Navigation
