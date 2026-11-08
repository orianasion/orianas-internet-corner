import vid from "./assets/ART/18(1).mp4"
import insta from "./assets/insta.gif"
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { art } from "./data.js"


function ArtContent(){
    const [index, setIndex] = React.useState(-1);
    return(
        <div className="display">
            <h1>Digital Art!</h1>
            <div className='text-box'>
                <p>A buncha random stuff. Click to enlarge. Check out my instagram for more!</p>
                <a href="https://www.instagram.com/_orianart/" target="_blank"><img src={insta} height={50}></img></a>
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
            <div className="video-box"><video controls src={vid} width={512}></video></div>
            
            
        </div>
    );

}

export default ArtContent