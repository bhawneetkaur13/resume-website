import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './organisms/Footer/Footer';
import Header from './organisms/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { lazy, Suspense } from 'react';


const ResumePage = lazy(()=>import('./pages/ResumePage/ResumePage'))
const ProjectsPage = lazy(()=>import('./pages/ProjectsPage/ProjectsPage'))
const ContactMePage =lazy(()=>import('./pages/ContactMePage/ContactMePage'))
function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/resume' element={<ResumePage/>}/>
          <Route path='projects' element={<ProjectsPage/>}/>
          <Route path='/contact' element={<ContactMePage/>}/>
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
