
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
            Tela2.style.background = "linear-gradient(to left, rgba(26, 26, 26, 0.485) 0%, rgb(220, 220, 220) 60%), url('"+Icon_OnlyFilms+"')";
            ImgProjeto.style.backgroundImage = "url("+Icon_OnlyFilms+")";

        }
        else if(projeto ==='HelpEarth'){

            NomeProjeto.textContent = 'HelpEarth';
            DescriçãoProjeto.textContent = 'Site fictício de nóticias focadas ao meio-ambiente.';
            linguSoftUtil.textContent = 'HTML, CSS e JavaScript';
            Tela2.style.background = "linear-gradient(to left, rgba(26, 26, 26, 0.485) 0%, rgb(220, 220, 220) 60%), url('"+Icon_HelpeEarth+"')";
            ImgProjeto.style.backgroundImage = "url("+Icon_HelpeEarth+")";
        }
        

        
    } if (opcao === 2) {
        Tela1.style.display = 'flex';
        Tela2.style.display = 'none';
    }
      
}


    return(
       <main id='PageProjetos'>
        <div id='PageTitulo'>Meus Projetos</div>
        <div className='ConteinerProjetos' id='Tela1Projetos'>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='OnlyFilms'></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>OnlyFilms</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>OnlyFilms é um site fíctício para aluguel e vendas de filmes.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>HTML, CSS.</div>
                </div>
            </div>
                <div className='BoxProjeto' id='BoxProjetoDireito'>
                    <div className='IMGProjetos' id='HelpEarth'></div>
                    <div className='DescrBoxProjeto' id='DescrBoxProjetoDireito'>
                    <div className='NomeBoxProjeto' id='NomeBoxProjetoDireito'>Help Earth</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'><p>Help Earth é um site fictício de notícias focadas no meio-ambiente.</p></div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>HTML, CSS e JavaScript.</div>
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos'><div className='loading'></div></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto' id='TextoLoading'>Em Breve</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>___________</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>___________</div>
                </div>
            </div>
        </div>
       </main>
    );

    
}
export default Projetos;