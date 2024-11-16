import Geometry from "../../components/Geometry/Geometry";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import { layouts } from "../../utils/vars";

const SharedLayout:React.FC = () => {



    return ( 
        <div>
            <Hero/>
            <Info/>
            <Geometry layout={layouts["shared"]}/>
        </div>
     );
}
 
export default SharedLayout;