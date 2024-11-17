import * as SC from "./GalleryStyled"

import { ReactComponent as GalMob1 } from "../../assets/images/galleryMob1.svg";
import { ReactComponent as GalMob2 } from "../../assets/images/galleryMob2.svg";
import { ReactComponent as GalMob3 } from "../../assets/images/galleryMob3.svg";
import { ReactComponent as GalMob4 } from "../../assets/images/galleryMob4.svg";
import { ReactComponent as GalTab1 } from "../../assets/images/GalTab1.svg";
import { ReactComponent as GalTab2 } from "../../assets/images/GalTab2.svg";
import { ReactComponent as GalTab3 } from "../../assets/images/GalTab3.svg";
import { ReactComponent as GalTab4 } from "../../assets/images/GalTab4.svg";
import { useScreenSize } from "../../utils/hooks/useScreenSize";

const Gallery: React.FC = () => {
const {isTablet} = useScreenSize()

  return (
    <SC.GalleryCustom>
      <SC.GalleryCon>
        {isTablet ? (
          <>
            <GalTab1 />
            <GalTab2 />
            <GalTab3 />
            <GalTab4 />{" "}
          </>
        ) : (
          <>
            <GalMob1 />
            <GalMob2 />
            <GalMob3 />
            <GalMob4 />
          </>
        )}
      </SC.GalleryCon>
      <SC.GalleryContent>
        <h3>Built for modern use</h3>
        <h4>Smarter meetings, all in one place</h4>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </SC.GalleryContent>
    </SC.GalleryCustom>
  );
};

export default Gallery;
