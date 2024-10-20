import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SurveyProvider } from './modules/utils/SurveyContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { generateSitemap } from 'react-router-sitemap';

import ReactGA from 'react-ga4'; // For Google Analytics 4
ReactGA.initialize('G-1F7Z14F760');

import Nav from './modules/Nav';
import Slogan from './modules/Slogan';
import HomePage from './modules/HomePage';
import PersonasPage from './modules/PersonasPage';
import FacetsPage from './modules/FacetsPage';
import AboutPage from './modules/AboutPage';
import DiscussionPage from './modules/DiscussionPage';
import ContactPage from './modules/ContactPage';

import SelfEfficacySurvey from './modules/quizzes/SelfEfficacySurvey';
import MotivationSurvey from './modules/quizzes/MotivationSurvey';
import LearningStyleSurvey from './modules/quizzes/LearningStyleSurvey';
import InformationProcessingSurvey from './modules/quizzes/InformationProcessingSurvey';
import AttitudeTowardRiskSurvey from './modules/quizzes/AttitudeTowardRiskSurvey';
import SurveySummary from './modules/quizzes/SurveySummary';


// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics on route change
    window.gtag('config', 'G-1F7Z14F760', { 'page_path': location.pathname });
  }, [location]);

  return (
    <div id="top">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header role="banner">
      <img src="./logo/cog-styles-survey-logo.png" alt="Brain icon to represent cognitive styles" />
        <h1> Cognitive Facets for learning technical materials</h1>
        <Slogan />
      </header>

           <Nav />
          <main role="main" id="main-content">
          <section>
            <Routes>
                <Route path="/"                       element={<HomePage />}></Route>
                <Route path="/about"                  element={<AboutPage />}></Route> 
                <Route path="/personasPage"           element={<PersonasPage />}></Route>
                <Route path="/facetsPage"             element={<FacetsPage />}></Route>             
                <Route path="/self-efficacy-survey"   element={<SelfEfficacySurvey />}></Route>
                <Route path="/motivation-survey"      element={<MotivationSurvey />}></Route>
                <Route path="/learning-style-survey"  element={<LearningStyleSurvey />}></Route>
                <Route path="/info-processing-survey" element={<InformationProcessingSurvey />}></Route>
                <Route path="/attitude-risk-survey"   element={<AttitudeTowardRiskSurvey />}></Route>
                <Route path="/survey-summary"         element={<SurveySummary />}></Route>
                <Route path="/discussion-prompts"     element={<DiscussionPage />}></Route>            
                <Route path="/contact"                element={<ContactPage />}></Route> 
                {/* <Route path="/sitemap.xml"            element={<generateSitemap />}></Route>                        */}
           </Routes>
          </section>
          </main>

      <nav className="navBottom">
            <Link to="/about">About this App</Link>
            <Link to="/discussion-prompts">Discussion Prompts</Link>
            <Link to="/contact">Contact</Link>
      </nav>
      <footer role="contentinfo">
        <p><cite>&copy; 2024 Oregon State University</cite>   |  <cite>See <a href="https://gendermag.org" target="_blank">GenderMag.org</a> for research and citations</cite></p>
      </footer>
    </div>
  );
}

function AppWithProviders() {
  return (
    <Router>
      <SurveyProvider>
        <App />
      </SurveyProvider>
    </Router>
  );
}

export default AppWithProviders;
