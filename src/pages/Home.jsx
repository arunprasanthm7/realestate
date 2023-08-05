import {Header} from "../components/Header.jsx";
import {Navigation} from "../components/Navigation.jsx";
import {Search} from "../components/Search.jsx";
import {MainContent} from "../components/MainContent.jsx";
import {Footer} from "../components/Footer.jsx";
export function Home() {
    return(
        <>
        <Header/>
        <Navigation/>
        <Search/>
        <MainContent/>
        <Footer/>
        </>
        
    )
}