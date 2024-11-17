import * as SC from "./HeroStyled"

import { ReactComponent as HeroSVG } from "../../assets/images/heroMob.svg";
import { ReactComponent as HeroTabSVG } from "../../assets/images/heroTab.svg";
import { useScreenSize } from "../../utils/hooks/useScreenSize";


const Hero: React.FC = () => {

    const {isTablet} = useScreenSize()

  return (
    <SC.HeroCustom>{isTablet ? <HeroTabSVG /> : <HeroSVG />}</SC.HeroCustom>
  );
};

export default Hero;
