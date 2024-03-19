import Navbar from "./assets/Components/NavBar/Footer/NavBar/Navbar";
import Footer from "./assets/Components/NavBar/Footer/Footer";
import SideBar from "./assets/Components/SideBar/SideBar";
import "./App.css";
function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <SideBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
