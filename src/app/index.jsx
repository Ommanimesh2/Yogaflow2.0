import "./index.css";
import BasicRoutes from "./routes/BasicRoutes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Playfair Display", "Gilroy", "Poppins", "Inter"],
      },
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <BasicRoutes />
    </div>
  );
}

export default App;
