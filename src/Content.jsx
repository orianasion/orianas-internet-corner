import websiteCat from './assets/website cat.png';
import insta from "./assets/insta.gif"
import itch from "./assets/itch.png"
import github from "./assets/github.gif"

function Content(){
    return(
        <main id="content">
            <noscript>Please enable JavaScript to view this website!</noscript>
            <section>
                <div className="intro-box">
                    <h1>Hello!!!! Welcome to my website!! 
                    </h1>
                    <h4 className="intro-desc"> <p>This is basically meant to be a portfolio/collection of some of the fun stuff ive created. Have fun looking around! Go ham!</p>
                        <p><u>Links:</u></p>
                            <a href="https://www.instagram.com/_orianart/" target="_blank"><img src={insta} height={50}></img></a>
                            <a href="https://orianas.itch.io/" target="_blank"><img src={itch} height={50}></img></a>
                            <a href="https://github.com/orianasion" target="_blank"><img src={github} height={50}></img></a>
                        
                    </h4>
                </div>

                
                <img src={websiteCat} className="website-cat"></img>  

                <h4>About Me~</h4>
                <p>My name is Oriana and im a 20 something CS student based in Canada! Im into gamedev, and have worked on a number of videogame
                    projects (check them out under the videogames tab!!). Even though im a computer science student I mostly do art stuff lmao. Most 
                    of the art ive done for my videogames have been 2D stuff but I also have a couple of 3D models ive been working on that you can also see! They will hopefully 
                    be part of a future project of mine. Im also a huge fan of anime and other stuff so theres also a lot of miscelaneous fanart as well hahaha. 
                    <b> Anyways have fun and thanks for stopping by!!</b>
                    </p>

            </section>
        </main>
    )
}

export default Content