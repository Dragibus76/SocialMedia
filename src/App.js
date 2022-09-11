import "./App.css"
import Home from "./pages/home/Home";
import Profil from "./pages/Profil/Profil";

function App() {
  return (
    <div className="App">
        <div className="blur" style={{ top: '-6%' , right: '0'}}></div>
        <div className="blur" style={{ top: '20%' , left: '-8rem'}}></div>
        {/* <Home/> */}
        <Profil/>
    </div>
  );
}

export default App;
