import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SurveyProvider } from './modules/utils/SurveyContext';

import Nav from './modules/Nav';
import Slogan from './modules/Slogan';
import HomePage from './modules/HomePage';
import PersonasPage from './modules/PersonasPage';
import FacetsPage from './modules/FacetsPage';

import SelfEfficacySurvey from './modules/quizzes/SelfEfficacySurvey';
import MotivationSurvey from './modules/quizzes/MotivationSurvey';
import LearningStyleSurvey from './modules/quizzes/LearningStyleSurvey';
import InformationProcessingSurvey from './modules/quizzes/InformationProcessingSurvey';
import AttitudeTowardRiskSurvey from './modules/quizzes/AttitudeTowardRiskSurvey';
import SurveySummary from './modules/quizzes/SurveySummary';


// import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div>
      <header>
      <img src="./logo/cog-styles-survey-logo.png" alt="" title="" />
        <h1> Cognitive Facets for learning technical materials</h1>
        <Slogan />
      </header>

      <SurveyProvider>
        <Router>
           <Nav />
          <main>
          <section>
            <Routes>
                <Route path="/"                       element={<HomePage />}></Route>
                <Route path="/personasPage"           element={<PersonasPage />}></Route>
                <Route path="/facetsPage"             element={<FacetsPage />}></Route>             
                <Route path="/self-efficacy-survey"   element={<SelfEfficacySurvey />}></Route>
                <Route path="/motivation-survey"      element={<MotivationSurvey />}></Route>
                <Route path="/learning-style-survey"  element={<LearningStyleSurvey />}></Route>
                <Route path="/info-processing-survey" element={<InformationProcessingSurvey />}></Route>
                <Route path="/attitude-risk-survey"   element={<AttitudeTowardRiskSurvey />}></Route>
                <Route path="/survey-summary"         element={<SurveySummary />}></Route>
            </Routes>
          </section>
          </main>
        </Router>
      </SurveyProvider>

      <footer>
        <p><cite>&copy; 2024 Oregon State University</cite> </p>
        <p><cite>See <a href="https://gendermag.org" target="_blank">GenderMag.org</a> for research and citations</cite></p>
      </footer>
    </div>
  );
}

export default App
