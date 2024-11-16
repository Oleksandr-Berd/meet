import * as SC from "./HeroStyled"

import { ReactComponent as HeroSVG } from "../../assets/images/heroMob.svg";

const Hero: React.FC = () => {
  return (
    <SC.HeroCustom>
      <HeroSVG />
    </SC.HeroCustom>
  );
};

export default Hero;
