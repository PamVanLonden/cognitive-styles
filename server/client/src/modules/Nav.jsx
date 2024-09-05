import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>

            <Link to="/quiz">Quiz</Link>
            {/* <Link to="/quizSummary">Summary</Link> */}
            
        </nav>
        </>
    );
}
export default Navigation;

