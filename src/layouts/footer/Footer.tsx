import Geometry from "../../components/Geometry/Geometry";
import { layouts } from "../../utils/vars";
import * as SC from "./FooterStyled"

const Footer:React.FC = () => {
    return (
      <SC.FooterCustom>
        <Geometry layout={layouts["footer"]} />

        <h3>Experience more together</h3>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <a href="https://portfolio-aleks-berd.netlify.app">
          Download <span>v1.3</span>{" "}
        </a>
      </SC.FooterCustom>
    );
}
 
export default Footer;