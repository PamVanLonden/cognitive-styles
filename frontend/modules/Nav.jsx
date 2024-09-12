import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Intro</Link>
            <Link to="/personasPage">Personas</Link>
            <Link to="/facetsPage">Facets</Link>
            <Link to="/self-efficacy-survey">Survey</Link>
            {/* <Link to="/quizSummary">Summary</Link> */}
            
        </nav>
        </>
    );
}
export default Navigation;

