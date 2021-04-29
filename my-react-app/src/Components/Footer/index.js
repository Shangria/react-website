import React from "react";
import {
    FooterContainer,
    FooterLink,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksWrapper,
    FooterWrap
} from "./FooterElements";

const Footer=()=>{

    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>About As</FooterLink>
                            <FooterLink to='/signin'>Now It Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Unlimited</FooterLinkTitle>
                            <FooterLink to='/signin'>Unlimited</FooterLink>
                            <FooterLink to='/signin'>Transactions</FooterLink>
                            <FooterLink to='/signin'>Zero</FooterLink>
                            <FooterLink to='/signin'>Get</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Testimonials</FooterLinkTitle>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Now It Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Reduce</FooterLinkTitle>
                            <FooterLink to='/signin'>Reduce</FooterLink>
                            <FooterLink to='/signin'>Virtual</FooterLink>
                            <FooterLink to='/signin'>Offices</FooterLink>
                            <FooterLink to='/signin'>Expenses</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;