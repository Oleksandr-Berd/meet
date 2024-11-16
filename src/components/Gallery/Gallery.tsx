import * as SC from "./GalleryStyled"

import { ReactComponent as GalMob1 } from "../../assets/images/galleryMob1.svg";
import { ReactComponent as GalMob2 } from "../../assets/images/galleryMob2.svg";
import { ReactComponent as GalMob3 } from "../../assets/images/galleryMob3.svg";
import { ReactComponent as GalMob4 } from "../../assets/images/galleryMob4.svg";

const Gallery: React.FC = () => {
  return (
    <SC.GalleryCustom>
      <SC.GalleryCon>
        <GalMob1 />
        <GalMob2 />
        <GalMob3 />
        <GalMob4 />
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
