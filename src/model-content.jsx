import mesona1 from './assets/mesona1.png';
import mesona2 from './assets/mesona2.png';
import mesona3 from './assets/mesona3.png';
import mesona4 from './assets/mesona4.png';
import mesona5 from './assets/mesona5.png';
import mesona6 from './assets/mesona6.png';

import starr1 from './assets/starr1.png'
import starr2 from './assets/starr2.png'
import starr3 from './assets/starr3.png'
import starr4 from './assets/starr4.png'
import starr5 from './assets/starr5.png'
import starr6 from './assets/starr6.png'

import nova1 from './assets/nova1.png'
import nova2 from './assets/nova2.png'
import nova3 from './assets/nova3.png'
import nova4 from './assets/nova4.png'
import nova5 from './assets/nova5.png'
import nova6 from './assets/nova6.png'

import mrhappy1 from './assets/mr happy1.png'
import mrhappy2 from './assets/mr happy2.png'
import mrhappy3 from './assets/mr happy3.png'
import mrhappy4 from './assets/mr happy4.png'
import mrhappy5 from './assets/mr happy5.png'
import mrhappy6 from './assets/mr happy6.png'

function ModelContent(){
    return(
        <>
        <div className='display'>
                <h1 id='me'>Me!! :D</h1>
                <div className='display-photos'>
                    <img className='eg-photo' src={mesona1}></img>
                    <img className='eg-photo' src={mesona2}></img>
                    <img className='eg-photo' src={mesona3}></img>
                    <img className='eg-photo' src={mesona4}></img>
                    <img className='eg-photo' src={mesona5}></img>
                    <img className='eg-photo' src={mesona6}></img>
                </div>
                <div className='text-box'>
                    <p>This is a 3D model of myself :DD. No plans of implementing it into a game or anything, just made it for fun (and this website lol). Made in blender, with heavy inspirtation from retro/ps1 graphics and a cartoon shader.</p>
                    <ul>
                        <li>Poly count: 3507</li>
                    </ul>
                </div>

            <h1 id='starr'>Starr!!</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={starr1}></img>
                <img className='eg-photo' src={starr2}></img>
                <img className='eg-photo' src={starr3}></img>
                <img className='eg-photo' src={starr4}></img>
                <img className='eg-photo' src={starr5}></img>
                <img className='eg-photo' src={starr6}></img>
            </div>
            <div className='text-box'>
                <p>This is Starr!! One of the main duo in an upcoming fighting game. Also made in blender, with heavy inspirtation from retro/ps1 graphics and a cartoon shader.</p>
                <ul>
                    <li>Poly count: 3939</li>
                </ul>
            </div>

            <h1 id='nova'>Nova :D</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={nova1}></img>
                <img className='eg-photo' src={nova2}></img>
                <img className='eg-photo' src={nova3}></img>
                <img className='eg-photo' src={nova4}></img>
                <img className='eg-photo' src={nova5}></img>
                <img className='eg-photo' src={nova6}></img>
            </div>
            <div className='text-box'>
            <p>Nova!! The other half of the main duo in my upcoming fighting game. Also made in blender, with heavy inspirtation from retro/ps1 graphics and a cartoon shader.</p>
            <ul>
                <li>Poly count: 5002</li>
            </ul>
            </div>

            <h1 id='mrhappy'>Mr. Happy!! :D</h1>
            <div className='display-photos'>
                <img className='eg-photo' src={mrhappy1}></img>
                <img className='eg-photo' src={mrhappy2}></img>
                <img className='eg-photo' src={mrhappy3}></img>
                <img className='eg-photo' src={mrhappy4}></img>
                <img className='eg-photo' src={mrhappy5}></img>
                <img className='eg-photo' src={mrhappy6}></img>
            </div>

            <div className='text-box'>
            <p>Mr Happy! The third character in my upcoming fighting game. Also made in blender, with heavy inspirtation from retro/ps1 graphics and a cartoon shader.</p>
            <ul>
                <li>Poly count: 8628</li>
            </ul>
            </div>

        </div>
        </>
    )
}

export default ModelContent