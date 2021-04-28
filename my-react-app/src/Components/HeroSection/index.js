import React from "react";

const HeroSection=()=>{
    return(
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" >

                    </VideoBg>
                </HeroBg>

            </HeroContainer>
        </>
    )

}
export default HeroSection