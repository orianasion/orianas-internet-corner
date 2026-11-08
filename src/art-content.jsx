import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import { art } from "./data.js"
// const photos = [
//   { src: SnipeUrType1, width: 800, height: 600 },
//   { src: SnipeUrType2, width: 1600, height: 900 },
// ];

function ArtContent(){
    const [index, setIndex] = React.useState(-1);
    return(
        <div className="display">
            <h1>Digital Art!</h1>
            <div className='text-box'>
                <p>A buncha random stuff. Click to enlarge.</p>
                <ul>
                    <li><a href="https://www.instagram.com/_orianart/" target="_blank">My Instagram</a></li>
                </ul>
            </div>

            <div className="photo-album">
                <RowsPhotoAlbum
                photos={art}
                targetRowHeight={300}
                onClick={({ index: current }) => setIndex(current)}
                />
                <Lightbox
                    index={index}
                    slides={art}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
            
        </div>
    );

}

export default ArtContent