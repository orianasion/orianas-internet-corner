import websiteCat from './assets/website cat.png';
function Content(){
    return(
        <main id="content">
            <noscript>Please enable JavaScript to view this website!</noscript>
            <section>
                <div className="intro-box">
                    <h1>Hello!!!! Welcome to my website!! 
                        <p>**THIS WEBSITE IS NOT FINISHED BTW ONLY THE 3D MODELS LINK IS CURRENTLY WORKING**</p>
                    </h1>
                    <h4 className="intro-desc"> <p>This is basically meant to be a portfolio/collection of some of the fun stuff ive created. Have fun looking around! Go ham!</p></h4>
                </div>

                <img src={websiteCat} className="website-cat"></img>       
                <h4>About Me~</h4>
                <p>My name is Oriana and im a 20 something CS student based in Canada! Im into gamedev, and have worked on a couple of videogame
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