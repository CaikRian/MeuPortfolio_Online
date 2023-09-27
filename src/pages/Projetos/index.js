
import './style.css';
import { Link } from "react-router-dom";
import Icon_OnlyFilms from './img/Icon_OnlyFilms.png';
import Icon_HelpeEarth from './img/Icon_HelpeEarth.png';

function Projetos(){

    

function VerProjetos(opcao, projeto){

    const Tela1 = document.getElementById("Tela1Projetos");
    const Tela2 = document.getElementById("Tela2Projetos");
    const ImgProjeto = document.getElementById("ImgProjeto");
    const NomeProjeto = document.getElementById("NomeProjeto");
    const DescriçãoProjeto = document.getElementById("DescriçãoProjeto");
    const linguSoftUtil = document.getElementById("linguSoftUtil");

    if(opcao === 1){

        Tela1.style.display = 'none'
        Tela2.style.display = 'flex';
        

        if(projeto ==='OnlyFilms'){

            NomeProjeto.textContent = 'OnlyFilms';
            DescriçãoProjeto.textContent = 'Home page simples de um site fictício de aluguel e venda de filmes.';
            linguSoftUtil.textContent = 'HTML e CSS.';
            Tela2.style.background = "linear-gradient(to left, rgba(26, 26, 26, 0.485) 0%, rgb(26, 26, 26) 60%), url('"+Icon_OnlyFilms+"')";
            ImgProjeto.style.backgroundImage = "url("+Icon_OnlyFilms+")";

        }
        else if(projeto ==='HelpEarth'){

            NomeProjeto.textContent = 'HelpEarth';
            DescriçãoProjeto.textContent = 'Site fictício de nóticias focadas ao meio-ambiente.';
            linguSoftUtil.textContent = 'HTML, CSS e JavaScript';
            Tela2.style.background = "linear-gradient(to left, rgba(26, 26, 26, 0.485) 0%, rgb(26, 26, 26) 60%), url('"+Icon_HelpeEarth+"')";
            ImgProjeto.style.backgroundImage = "url("+Icon_HelpeEarth+")";
        }
        

        
    } if (opcao === 2) {
        Tela1.style.display = 'flex';
        Tela2.style.display = 'none';
        //Tela2.style.opacity = '-10';
        //Tela1.style.opacity = '1';
    }
      
}


    return(
       <main id='PageProjetos'>

        <div className='ConteinerProjetos' id='Tela1Projetos'>
            <div className='BoxProjeto' id='OnlyFilms' onClick={() => VerProjetos(1, 'OnlyFilms')}>
                <div className='TituloProjetos'>OnlyFilms</div>
            </div>
                <div className='BoxProjeto' id='HelpEarth' onClick={() => VerProjetos(1, 'HelpEarth')}>
                    <div className='TituloProjetos'>Help Earth</div>
            </div>
            <div className='BoxProjeto' >
                <div className='TituloProjetos'>Em Breve...</div>
                <div className='loading'></div>
            </div>
        </div>
            <div className='ConteinerProjetos' id='Tela2Projetos'>
                <div className='Projeto'>
                <div id='BtnVoltarProj' onClick={() => VerProjetos(2)}>Voltar</div>
                    <div id='NomeProjeto'></div>

                    <div className='SobreProjeto'>Descrição</div>
                    <div className='SpanProjetos' id='DescriçãoProjeto'></div>
                    
                    <div className='SobreProjeto'>Linguaguens/Softwares utilizados</div>
                    <div className='SpanProjetos' id='linguSoftUtil'></div>
                </div>
                <div id='ProjetoExt'>
                    <div id='ImgProjeto'></div>
                    <Link>Acessar</Link>
                </div>
                
        </div>


       </main>
    );

    
}
export default Projetos;