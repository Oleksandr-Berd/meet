import * as SC from "./HeaderStyled"

import {ReactComponent as LogoSVG} from "../../assets/images/logo.svg"

const Header = () => {
    return ( 
        <SC.HeaderCustom>
            <LogoSVG/>
        </SC.HeaderCustom>
     );
}
 
export default Header;