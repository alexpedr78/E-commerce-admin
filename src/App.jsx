import Navbar from "./assets/Components/NavBar/NavBar";
import Footer from "./assets/Components/Footer/Footer";
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
