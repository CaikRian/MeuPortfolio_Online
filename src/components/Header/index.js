import {Link} from 'react-router-dom';
import './style.css';


function Header(){

    function AbrirMenu(){

        const OpMenuResp = document.getElementById('OpMenuResp');
        const Barrinha1  = document.getElementById('Barrinha1');
        const Barrinha2  = document.getElementById('Barrinha2');
        const Barrinha3  = document.getElementById('Barrinha3');
        if (OpMenuResp.style.display !== 'flex'){

            OpMenuResp.style.display = 'flex';
            OpMenuResp.style.animation = 'abrirParaDireita 0.2s linear';
            document.body.style.overflow = 'hidden';
            Barrinha1.style.transform = 'rotate(45deg)';
            Barrinha2.style.transform = 'rotate(45deg)';
            Barrinha3.style.transform = 'rotate(-45deg)';
            Barrinha1.style.position = 'absolute';
            Barrinha2.style.position = 'absolute';
            Barrinha3.style.position = 'absolute';
            

        }else{
            OpMenuResp.style.display = 'none';
            document.body.style.overflow = 'auto';
            Barrinha1.style.transform = 'none';
            Barrinha2.style.transform = 'none';
            Barrinha3.style.transform = 'none';
            Barrinha1.style.position = 'relative';
            Barrinha2.style.position = 'relative';
            Barrinha3.style.position = 'relative';
        }
    }

    function FecharMenu(){
        const OpMenuResp = document.getElementById('OpMenuResp');
        const Barrinha1  = document.getElementById('Barrinha1');
        const Barrinha2  = document.getElementById('Barrinha2');
        const Barrinha3  = document.getElementById('Barrinha3');

        document.body.style.overflow = 'auto';
        OpMenuResp.style.display = 'none';
        Barrinha1.style.transform = 'none';
        Barrinha2.style.transform = 'none';
        Barrinha3.style.transform = 'none';
        Barrinha1.style.position = 'relative';
        Barrinha2.style.position = 'relative';
        Barrinha3.style.position = 'relative';
    }
 
    return(
        <header>
            
            
           
            <a href="/" class="logo" onClick={FecharMenu}>CK</a>
            <div className = "menu" id='menuPC' >
                <a href='/#'>Home</a>
                <a href='/#TitSobreMim'>Sobre mim</a>
                <a href='/#TitFormAcad'>Formação Acadêmica</a>
                <a href='/#TitExpProf'>Exp. Profissional</a>
                <a href='/#TitHabild'>Habilidades</a>
                <div className='BtnProjetos'><a href="/Projetos/#" id='LinkProjeto'>Projetos</a></div>
            </div>
            <div className = "menu" id='menuResponsivo'>
            <div className='BtnProjetos' onClick={FecharMenu}><a href="/Projetos/#">Projetos</a></div>
                <div className='BarraMenu' onClick={AbrirMenu}>
                    <div className='Barrinhas' id='Barrinha1'></div>
                    <div className='Barrinhas' id='Barrinha2'></div>
                    <div className='Barrinhas' id='Barrinha3'></div>
                </div>
                <div id='OpMenuResp' onClick={() => FecharMenu()}>
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