import {Header} from "./components/Home/Header.jsx";
import {Navigation} from "./components/Home/Navigation.jsx";
import {Search} from "./components/Home/Search.jsx";
import {MainContent} from "./components/Home/MainContent.jsx";
import {Footer} from "./components/Home/Footer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
   <Header/>
   <Navigation/>
   <Search/>
   <MainContent/>
   <Footer/>
    </div>
  );
}

export default App;