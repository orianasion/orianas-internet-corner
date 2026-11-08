import vid1 from "./assets/MMD/1.mp4"
import vid2 from "./assets/MMD/2.mp4"
import vid3 from "./assets/MMD/3.mp4"
import vid4 from "./assets/MMD/4.mp4"
import vid5 from "./assets/MMD/5.mp4"

function MMDContent() {

  return (
      <div className="display">
        <h1>MMD animatics :D</h1>
        <div className='text-box'>
          <p><span style={{ fontSize: "1.4em", fontWeight: "bold", display: "inline"}}>For the uninitiated,</span> MMD, or MikuMikuDance is an animation software released in 2008, originally produced for the japanese Vocaloid Hatsune Miku. 
              It was intended for vocaloid users to be able to create music videos and other animations for their vocaloids, but has since expanded and now all 
              sorts of 3D models can be imported and animated in MMD. Some video game companies have even released their official 3D models as pmx files for fans all over 
              the world to use and create animatics with in MMD!</p>
          <p>Here are some of the MMD videos I've made by taking advantage of that fact :D</p>
        </div>
        <div className="video-box">
          <video controls src={vid1} width={700}></video>
          <video controls src={vid2} width={700}></video>
          <video controls src={vid3} width={700}></video>
          <video controls src={vid4} width={700}></video>
          <video controls src={vid5} width={700}></video>
        </div>
      </div>
  );
}

export default MMDContent