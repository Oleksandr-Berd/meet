import * as SC from "./GeometryStyled"

import { IProps } from "../../utils/interfaces";

const Geometry:React.FC<IProps> = ({layout}) => {



    return (
      <SC.Geometry>
        <SC.GeometryLine layout={layout}></SC.GeometryLine>
        <SC.GeometryCircle layout={layout}>{layout}</SC.GeometryCircle>
      </SC.Geometry>
    );
}
 
export default Geometry;