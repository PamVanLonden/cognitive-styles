import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Intro</Link>
            <Link to="/personas">Personas</Link>
            <Link to="/quiz">Quiz</Link>
            {/* <Link to="/quizSummary">Summary</Link> */}
            
        </nav>
        </>
    );
}
export default Navigation;

