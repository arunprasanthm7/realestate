import {Header} from "./components/Header.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Search} from "./components/Search.jsx";
import {MainContent} from "./components/MainContent.jsx";
import {Footer} from "./components/Footer.jsx";
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