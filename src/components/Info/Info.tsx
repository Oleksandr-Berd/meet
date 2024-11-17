import * as SC from "./InfoStyled"

import leftHero from "../../assets/images/desktop/image-hero-left.png"
import rightHero from "../../assets/images/desktop/image-hero-right.png"

const Info:React.FC = () => {
    return (
      <SC.InfoCon>
        <img src={leftHero} alt="hero" />
        <div>
          <SC.InfoTitle>Group Chat for Everyone</SC.InfoTitle>
          <SC.InfoContent>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </SC.InfoContent>
          <SC.InfoLinksCon>
            <a href="https://portfolio-aleks-berd.netlify.app">
              Download <span>v1.3</span>{" "}
            </a>
            <a href="https://portfolio-aleks-berd.netlify.app">What is it?</a>
          </SC.InfoLinksCon>
        </div>
        <img src={rightHero} alt="hero" />
      </SC.InfoCon>
    );
}
 
export default Info;