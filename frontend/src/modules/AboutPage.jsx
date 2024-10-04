
function AboutPage(){
return (
    <>
    <h2>About this app</h2>
    <article>
        <p>Based on research by the GenderMag (InclusiveMag) program 
        at Oregon State and other universities, 
        this survey compares students' cognitive learning styles to their peers.</p>

        <p>The survey incorporates 5 facets related to gender and compares a set of 3 personas. </p>

        <h3>Recommendations and Additions</h3> 
        <p>Future additions will include surveys for Socioecomonic Styles (SES) and Refugee Styles.</p>

        <h3>Authors</h3> 
        <p>Authors of this site include: Pam Van Londen, Lara Letaw, and Justin Dickerson, of Oregon State University. 
            Supporting research is based on <a href="https://web.engr.oregonstate.edu/~burnett/Reprints/diversityBook-2024.pdf" target="_blank">How to measure diversity actionably in technology</a> (preprint), M. Hamid et al., 
            in Equity, Diversity, Inclusion in Software Engineering (Eds: D. Damian et al.), Apress, 2024.
        </p>


        <h3>About the code</h3>
        <p>This app/site is built using Vite+React and is hosted by Render.com. Some code was developed using ChatGPT. 
        Additional React libraries include:</p>
        <ul>
            <li>useState, useEffect, createContext, and useContext <a href="https://react.dev/reference/react/hooks" target="_blank">hooks from React</a>.</li>
            <li>BrowserRouter, useLocation, and Link from <a href="https://reactrouter.com/en/main" target="_blank">react-router-dom</a>. </li>
            <li><a href="https://www.npmjs.com/package/@rollup/plugin-wasm" target="_blank">rollup</a> for use on Render.com. </li>
            <li><a href="https://html2canvas.hertzen.com/" target="_blank">html2Canvas</a> and 
                <a href="https://www.npmjs.com/package/pica" target="_blank">Pica</a>, for downloading compressed image files.</li>
        </ul>
        
        <h2>Accessibility features</h2>
        <ul>
            <li>Skip-link added above header.</li>
            <li>Aria attributes.</li>
            <li>Alternative text for images.</li>
            <li>Visual :focus changes for interactivity.</li>
        </ul>
        <h2> About the styles</h2>
        <ul>
            <li>Stylesheet designed by Pam Van Londen (because she hates using div tags and a million classes).</li>
            <li>The logo was initially designed by GPTChat's LogoCreater and modified by Pam.</li>
            <li>The color scheme is: 
                <ul>
                    <li> --blue:   rgb(58, 154, 198);</li>
                    <li> --green:  rgb(68, 178, 68);</li>
                    <li> --orange: rgb(224, 137, 6);</li>
                    <li> --red:    #C34500;</li>
                    <li> --shadow: rgb(209, 208, 208);</li>
                    <li> Colornames allowed: black, gray, whitesmoke, white. </li>
                </ul>
            </li>
        </ul>

       <h2>Google Analytics</h2>
        <p>The gTag has been included in index.html and App.jsx to determine how many people click and how many complete the survey. 
        In addition, it may track who has downloaded a PNG file of their results, for use in discussions.</p>

        </article>
        </>
)
};
export default AboutPage;