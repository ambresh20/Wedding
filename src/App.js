import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RecentEvent from './components/RecentEvent';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div className="App ">

      {/* Navigation */}
	    <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recent' element={<RecentEvent />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='/aboutus' element={<AboutPage />} />

      </Routes>
    
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
