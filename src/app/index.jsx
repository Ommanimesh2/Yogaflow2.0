import './index.css';
import BasicRoutes from './routes/BasicRoutes';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Footer from './components/Footer';
function App() {

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Playfair Display', 'Poppins','Inter']
    }
  });
 }, []);
  return (
    <>
    <Navbar />
    <BasicRoutes />
    </>
  );
}

export default App;
