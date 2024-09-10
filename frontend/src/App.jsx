import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Slogan from './modules/Slogan.jsx';
import HomePage from './modules/HomePage.jsx';
import Personas from './modules/Personas.jsx';
import QuizPage from './modules/cogstyles/QuizPage.jsx';
import QuizSummary from './modules/cogstyles/QuizSummary.jsx';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* HTML Goes Here */}
      <header>
        <h1>Cognitive Facets for learning technical materials</h1>
        <Slogan />
      </header>

      <Router>
        <Nav />
        <main>
        <section>
          <Routes>
              <Route path="/"            element={<HomePage />}></Route>
              <Route path="/personas"    element={<Personas />}></Route>
              <Route path="/quiz"        element={<QuizPage />}></Route>
              <Route path="/quizSummary" element={<QuizSummary />}></Route>
          </Routes>
        </section>
        </main>
      </Router>

      <footer>
        <p>&copy; 2024 Pam Van Londen for Oregon State University</p>
      </footer>
    </>
  )
}

export default App
