import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
//import Site_OnlyFilms from './pages/Projetos/Projetos_Avulsos/Site-OnlyFilms/Index.html';
//import Site_HelpEarth from './pages/Projetos/Projetos_Avulsos/Site-Help_Earth/Index.html';
import Header from './components/Header';
import Footer from './components/Footer';


function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projetos" element={<Projetos />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;