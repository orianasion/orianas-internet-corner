import mrHappyPeek from './assets/mr happy peek.png';
import starrNoBg from './assets/starr no bg.png';
import novaNoBg from './assets/nova no bg.png';

function BgImages(){
   return(
        <div className="image-stack">
            <img className="img-three" title="Mr. Happy" src={mrHappyPeek} alt="Foreground Image" />
            <img className="img-one" title="Starr!" src={starrNoBg} alt="Foreground Image" />
            <img className="img-two" title="Nova!" src={novaNoBg} alt="Foreground Image" />
        </div>
    )
}

export default BgImages