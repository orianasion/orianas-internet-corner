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

function VidoegamesContent(){
    return(
        <div className="display">
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

export default VidoegamesContent