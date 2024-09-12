function HomePage(){
    return (
        <>
           <h2>Welcome!</h2>
           <article>
                <h3>Introduction</h3>
                <p>OSU's and <a href="https://gendermag.org/Docs/Cognitive-Style-Heuristics-from-the-GenderMag-Project-2021-03-07-1537.pdf" target="_blank">
                    Cognitive Style Heuristics</a> and the <a href="https://gendermag.org/" target="_blank">GenderMag/InclusiveMag</a> programs study
                    differences in how people problem-solve while learning new technical skills.
                    
                    The projects' core methods of finding bias bugs in software
                    is to apply <strong>personas</strong> that represent different sets of <strong>cognitive facets</strong>.
                </p>
                <p>Explore the Facets and Personas by clicking on the tabs at the top, 
                    then analyze which persona fits you best, by taking the Survey.</p>

                    <p>Below is a diagram of how the Personas and Facets relate:</p>
                <img src="./images/persona-scale-faces.png" alt="Diagram of how the Personas and Facets relate." title="" />

            </article>
        </>
    )
}

export default HomePage;