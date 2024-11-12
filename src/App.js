import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App ">

      {/* Navigation */}
	    <NavBar />

      <Routes>
      {/* <Route path="/aboutus" element={<AboutUsPage />} />  */}
        <Route path='/' element={<Home />} />
      </Routes>
    
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
