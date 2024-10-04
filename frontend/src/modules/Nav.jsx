import { Link } from 'react-router-dom';
import { useNavigation } from './utils/NavigationContext';

function Navigation() {
    const { hasVisitedSummary } = useNavigation();
    return (
        <>
        <nav role="navigation"  aria-label="Page to page navigation">
            <Link to="/">Intro</Link>
            <Link to="/personasPage">Personas</Link>
            <Link to="/facetsPage">Facets</Link>
            <Link to="/self-efficacy-survey">Survey</Link>
            {hasVisitedSummary && <Link to="/survey-summary">Summary</Link>}
        </nav>
        </>
    );
}
export default Navigation;

