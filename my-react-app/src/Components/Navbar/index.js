import React, {useState, useEffect} from "react";
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink,

} from "./NavbarElements";


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav]=useState(false);

    const changeNav=()=>{
        if (window.scrollY>=80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav )
    },[])

    const scrollToTop=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={scrollToTop}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                                activeSlass="active"
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="discover"
                                spy={true}
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                                activeSlass="active">
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                                activeSlass="active"
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="signup"
                                spy={true}
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                                activeSlass="active"
                            >
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                            to="/signin"
                        >
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>

        </>
    );
};
export default Navbar;