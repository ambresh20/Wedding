import { Routes } from 'react-router-dom';
import WeddingPlanner from './components/WeddingPlanner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">

      {/* Navigation */}
	    <NavBar />

      <Routes>
      {/* <Route path="/aboutus" element={<AboutUsPage />} />  */}
      </Routes>

      <WeddingPlanner />

        {/* Footer */}
        <Footer />

    </div>
  );
}

export default App;
