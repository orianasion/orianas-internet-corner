import ShadowMagic1 from './assets/SHADEOFMAGIC/1.png';
import ShadowMagic2 from './assets/SHADEOFMAGIC/2.png';
import ShadowMagic3 from './assets/SHADEOFMAGIC/3.png';
import ShadowMagic4 from './assets/SHADEOFMAGIC/4.png';
import ShadowMagic5 from './assets/SHADEOFMAGIC/5.png';
import ShadowMagic6 from './assets/SHADEOFMAGIC/6.png';

import ctc1 from './assets/COLLECTTHECOSMOS/1.png';
import ctc2 from './assets/COLLECTTHECOSMOS/2.png';
import ctc3 from './assets/COLLECTTHECOSMOS/3.png';
import ctc4 from './assets/COLLECTTHECOSMOS/4.png';
import ctc5 from './assets/COLLECTTHECOSMOS/5.png';
import ctc6 from './assets/COLLECTTHECOSMOS/6.png';

import DinerTime1 from './assets/DINER TIME/1.png';
import DinerTime2 from './assets/DINER TIME/2.png';
import DinerTime3 from './assets/DINER TIME/3.png';
import DinerTime4 from './assets/DINER TIME/4.png';
import DinerTime5 from './assets/DINER TIME/5.png';
import DinerTime6 from './assets/DINER TIME/6.png';

import SnipeUrType1 from './assets/SNIPE UR TYPE/1.png';
import SnipeUrType2 from './assets/SNIPE UR TYPE/2.png';
import SnipeUrType3 from './assets/SNIPE UR TYPE/3.png';
import SnipeUrType4 from './assets/SNIPE UR TYPE/4.png';
import SnipeUrType5 from './assets/SNIPE UR TYPE/5.png';
import SnipeUrType6 from './assets/SNIPE UR TYPE/6.png';

import FishGame1 from './assets/FISH GAME/1.png';
import FishGame2 from './assets/FISH GAME/2.png';
import FishGame3 from './assets/FISH GAME/3.png';
import FishGame4 from './assets/FISH GAME/4.png';
import FishGame5 from './assets/FISH GAME/5.png';
import FishGame6 from './assets/FISH GAME/6.png';

// import * as React from "react";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import { RowsPhotoAlbum } from "react-photo-album";
// import "react-photo-album/rows.css";

function VideoGamesContent(){
    return(
        <div className="display">
            <h1 id='shadeOfMagic'>Shade Of Magic</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={ShadowMagic1}></img>
                <img className='eg-photo' src={ShadowMagic2}></img>
                <img className='eg-photo' src={ShadowMagic3}></img>
                <img className='eg-photo' src={ShadowMagic4}></img>
                <img className='eg-photo' src={ShadowMagic5}></img>
                <img className='eg-photo' src={ShadowMagic6}></img>
            </div>
            <div className='text-box'>
                <p>A mysterious shadow fairy is stuck in your room! Move the objects around and manipulate the shadows to create a path to help her escape. A twist on the classic platformer genre.</p>
                <p>Made for GameDev McGill's October-November monthly jam with two other teammates. I created all of the furniture in 3D using Blender, and I also programmed the camera movement and the win condition, and integrated the fairy's walk, idle and jump animations that were created by my teammate.</p>
                    <ul>
                        <li><a href="https://orianas.itch.io/shade-of-magic" target="_blank">Itch.io</a></li>
                        <li><a href="https://github.com/orianasion/Monthly-Jam" target="_blank">Github</a></li>
                    </ul>
            </div>

            <h1 id='collectTheCosmos'>Collect The Cosmos</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={ctc1}></img>
                <img className='eg-photo' src={ctc2}></img>
                <img className='eg-photo' src={ctc3}></img>
                <img className='eg-photo' src={ctc4}></img>
                <img className='eg-photo' src={ctc5}></img>
                <img className='eg-photo' src={ctc6}></img>
            </div>
            <div className='text-box'>
                <p>You are the sun, and you have 100 million years to create your solar system! That may seem like a lot of time, but time flies fast for a massive sphere of hot plasma. Collect as many planets, asteroids and other fun space objects as you can before the timer runs out!</p>
                <p>Made in 48hrs for Cosmic Jam 2026 in a team of three people. I contributed to creating 2D sprites and animations for the collectible objects. I programmed random asteroid spawning logic, target pursuit and collision-triggered destruction sequences for the collectibles.</p>
                    <ul>
                        <li><a href="https://mooncat225.itch.io/collect-the-cosmos" target="_blank">Itch.io</a></li>
                        <li><a href="https://github.com/Akutana/CosmicJam" target="_blank">Github</a></li>
                    </ul>
            </div>
            <h1 id='dinerTime'>Diner Time!</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={DinerTime1}></img>
                <img className='eg-photo' src={DinerTime2}></img>
                <img className='eg-photo' src={DinerTime3}></img>
                <img className='eg-photo' src={DinerTime4}></img>
                <img className='eg-photo' src={DinerTime5}></img>
                <img className='eg-photo' src={DinerTime6}></img>
            </div>
            <div className='text-box'>
                <p>A detective murder mystery where you relive the same day over and over until you can find the killer of your head chef.</p>
                <p>Made in 48hrs for Creative Jam 2026 with a team of 6 people. I created all of the 2D character sprites for the game, as well as the 2D main menu title card and UI buttons. 
                    I implemented the interactive character dialogue as well as design and button functionality for the main menu.</p>
                    <ul>
                        <li><a href="https://mooncat225.itch.io/diner-time" target="_blank">Itch.io</a></li>
                        <li><a href="https://github.com/Akutana/CreativeJam2026" target="_blank">Github</a></li>
                    </ul>
            </div>

            <h1 id='snipeUrType'>Snipe Ur Type</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={SnipeUrType1}></img>
                <img className='eg-photo' src={SnipeUrType2}></img>
                <img className='eg-photo' src={SnipeUrType3}></img>
                <img className='eg-photo' src={SnipeUrType4}></img>
                <img className='eg-photo' src={SnipeUrType5}></img>
                <img className='eg-photo' src={SnipeUrType6}></img>
            </div>
            <div className='text-box'>
                <p>A deductive shooter game where you play as cupid to find uour client's ideal soulmate. Meet wacky characters with interesting criteria for their potential lovers and try to find the perfect one for them.</p>
                <p>Made in 48hrs for McGameJam 2026 with a team of 7 people. I created most of the game's 2D assets, with the help of one other artist.</p>
                    <ul>
                        <li><a href="https://booknoodle.itch.io/snipe-ur-type" target="_blank">Itch.io</a></li>
                        <li><a href="https://github.com/WillyHB/snipe-ur-type" target="_blank">Github</a></li>
                    </ul>
            </div>
            <h1 id='fishGame'>A Fish Game</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={FishGame1}></img>
                <img className='eg-photo' src={FishGame2}></img>
                <img className='eg-photo' src={FishGame3}></img>
                <img className='eg-photo' src={FishGame4}></img>
                <img className='eg-photo' src={FishGame5}></img>
                <img className='eg-photo' src={FishGame6}></img>
            </div>
            <div className='text-box'>
                <p>A 2D story rich adventure game based off of the myth of sedna. Dive into the deep sea and uncover her hidden story as you look across the sea floor for her severed fingers.</p>
                <p>Made for GDM Studios 2026, a student game development showcase by GameDev McGill — McGill University's game development society, where we won Best Theme Integration for the theme "Into the Unknown". I did all of the 2d assets as well as the cover art and cutscenes. I also made and implemented the 2D bone animations of the main character, enemies, and final boss.</p>
                    <ul>
                        <li><a href="https://o1loly.itch.io/abyssal-dive" target="_blank">Itch.io</a></li>
                        <li><a href="https://github.com/ol1oly/GDM-team7" target="_blank">Github</a></li>
                    </ul>
            </div>
        </div>
    );

}

export default VideoGamesContent