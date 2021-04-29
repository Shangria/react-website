import React from "react";
import Img1 from '../../img/car.svg';
import Img2 from '../../img/undraw_Collaboration_re_vyau.svg';
import Img3 from '../../img/undraw_Savings_re_eq4w.svg';


export const homeObjOne={
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'about',
    headLine:'Unlimited Transactions with zero fees',
    description:'Get access to our exclusive app that allows to send unlimited.',
    buttonLabel:'Get started',
    imgStart:false,
    img: Img1,
    alt: 'car',
    dark:true,
    primary:true,
    darkText:false
};

export const homeObjTwo={
    id:'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'discover',
    headLine:'Unlimited Transactions with zero fees',
    description:'Get access to our exclusive app that allows to send unlimited.',
    buttonLabel:'Learn more',
    imgStart:true,
    img: Img2,
    alt: 'img',
    dark:false,
    primary:false,
    darkText:true
};
export const homeObjTree={
    id:'signup',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'signup',
    headLine:'Unlimited Transactions with zero fees',
    description:'Get access to our exclusive app that allows to send unlimited.',
    buttonLabel:'Start now',
    imgStart:false,
    img: Img3,
    alt: 'img',
    dark:true,
    primary:true,
    darkText:false
};