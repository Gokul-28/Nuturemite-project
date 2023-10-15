import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
    <>
    <div className="bg-dark text-light">
    <Navbar />
    <Homepage />
    <Products />
    <Information />
    <Footer /> 
  
</div>
    </>
  );
}

export default App;
