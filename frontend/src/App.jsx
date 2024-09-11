import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './modules/Nav.jsx';
import Slogan from './modules/Slogan.jsx';
import HomePage from './modules/HomePage.jsx';
import PersonasPage from './modules/PersonasPage.jsx';
import FacetsPage from './modules/FacetsPage.jsx';
import QuizPage from './modules/quizzes/QuizPage.jsx';
import QuizSummary from './modules/quizzes/QuizSummary.jsx';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>Cognitive Facets for learning technical materials</h1>
        <Slogan />
      </header>

      <Router>
        <Nav />
        <main>
        <section>
          <Routes>
              <Route path="/"             element={<HomePage />}></Route>
              <Route path="/personasPage" element={<PersonasPage />}></Route>
              <Route path="/facetsPage"   element={<FacetsPage />}></Route>             
              <Route path="/quiz"         element={<QuizPage />}></Route>
              <Route path="/quizSummary"  element={<QuizSummary />}></Route>
          </Routes>
        </section>
        </main>
      </Router>

      <footer>
        <p><cite>&copy; 2024 Oregon State University</cite> </p>
        <p><cite>See <a href="https://gendermag.org" target="_blank">GenderMag.org</a> for research and citations</cite></p>
      </footer>
    </div>
  )
}

export default App
