import {Link} from 'react-router-dom';
import './style.css';


function Header(){

    function AbrirMenu(){

        const OpMenuResp = document.getElementById('OpMenuResp');
        
        if (OpMenuResp.style.display !== 'flex'){

            OpMenuResp.style.display = 'flex';
            OpMenuResp.style.animation = 'abrirParaDireita 0.2s linear';
            document.body.style.overflow = 'hidden';

        }else{
            OpMenuResp.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    function FecharMenu(){
        const OpMenuResp = document.getElementById('OpMenuResp');

        document.body.style.overflow = 'auto';
        OpMenuResp.style.display = 'none';
    }
 
    return(
        <header>
            <Link to="/" id="logo">CK</Link>
            
            <div className = "menu" id='menuPC'>
                
                <a href='/#'>Home</a>
                <a href='/#TitSobreMim'>Sobre Mim</a>
                <a href='/#TitFormAcad'>Formação Acadêmica</a>
                <a href='/#TitExpProf'>Exp. Profissional</a>
                <a href='/#TitHabild'>Habilidades</a>
                <div className='BtnProjetos'><Link to="/Projetos">Projetos</Link></div>
            </div>
            <div className = "menu" id='menuResponsivo'>
                <div className='BtnProjetos'><Link to="/Projetos">Projetos</Link></div>
                <div className='BarraMenu' onClick={AbrirMenu}>
                    <div className='Barrinhas'></div>
                    <div className='Barrinhas'></div>
                    <div className='Barrinhas'></div>
                </div>
                <div id='OpMenuResp'>
                    <div id='OpcoesResp'>
                        <a href='/#' onClick={() => FecharMenu()}>Home</a>
                        <a href='/#TitSobreMim' onClick={() => FecharMenu()}>Sobre Mim</a>
                        <a href='/#TitFormAcad' onClick={() => FecharMenu()}>Form. Acadêmica</a>
                        <a href='/#TitExpProf' onClick={() => FecharMenu()}>Exp. Profissional</a>
                        <a href='/#TitHabild' onClick={() => FecharMenu()}>Habilidades</a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;