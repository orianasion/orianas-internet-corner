import * as React from "react";

import Lightbox from "yet-another-react-lightbox";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export default function Gallery() {
  const [index, setIndex] = React.useState(-1);

  return (
      <div className="display">
            <h1>MMD animatics :D</h1>
            <div className='text-box'>
                <p>For the uninitiated, MMD, or MikuMikuDance is an animation software released in 2008, originally produced for the japanese Vocaloid Hatsune Miku. 
                    It was intended for vocaloid users to be able to create music videos and other animations for their vocaloids, but has since expanded and now all 
                    sorts of 3D models can be imported and animated in MMD. Some video game companies have even released their official 3D models as pmx files for fans all over 
                    the world to use and create animatics with in MMD!</p>
                <p>Here are some of the MMD videos I've made by taking advantage of that fact :D</p>
            </div>

      {/* <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      /> */}
    </div>
  );
}