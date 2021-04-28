import React from 'react';
import { Button } from '../ButtonElements';
import img1 from '../../img/car.svg';

import {
    Column2,
    ImgWrap,
    InfoContainer,
    Img,
    InfoRow,
    InfoWrapper,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    BtnWrap,
    Subtitle,
} from "./InfoElements";

const InfoSection=({
                       lightBg,
                       id,
                       topLine,
                       lightText,
                       headLine,
                       darkText,
                       description,
                       buttonLabel,
                       img,
                       alt,
                       primary,
                       dark,
                       dark2,

                   })=>{
    return(
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                            smoot={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                            primary={primary ? 1:0}
                                            dark={dark? 1:0}
                                            dark2={dark2? 1:0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img1} alt={alt}/>
                            </ImgWrap>
                            .
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}
export default InfoSection