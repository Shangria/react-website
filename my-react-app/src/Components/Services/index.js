import React from "react";
import Icon1 from '../../img/undraw_Select_option_re_u4qn.svg';
import Icon2 from '../../img/undraw_Savings_re_eq4w.svg';
import Icon3 from '../../img/undraw_stepping_up_g6oo.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from "./ServicesElements";

const Services = () => {

    return (
        <>
            <ServicesContainer to='\' id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}></ServicesIcon>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}></ServicesIcon>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}></ServicesIcon>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;