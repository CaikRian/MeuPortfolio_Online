
import './style.css';

function Projetos(){
    const redirecionarParaURL = (op) => {
        if(op === 1){
            window.location.href = '';
        }else if(op === 2){
            window.location.href = 'https://site-help-earth.vercel.app/';
        }else if(op === 3){
            window.location.href = 'https://minha-pokedex.vercel.app/';
        }
        
      };

    return(
       <main id='PageProjetos'>
        <div id='PageTitulo'>Meus Projetos</div>
        <div className='ConteinerProjetos' id='Tela1Projetos'>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='OnlyFilms' onClick={() => redirecionarParaURL(1)}></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>OnlyFilms</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>OnlyFilms é um site fíctício para aluguel e vendas de filmes.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>HTML, CSS.</div>
                </div>
            </div>
            <div className='BoxProjeto' id='BoxProjetoDireito'>
                    <div className='IMGProjetos' id='HelpEarth' onClick={() => redirecionarParaURL(2)}></div>
                    <div className='DescrBoxProjeto' id='DescrBoxProjetoDireito'>
                    <div className='NomeBoxProjeto' id='NomeBoxProjetoDireito'>Help Earth</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'><p>Help Earth é um site fictício de notícias focadas no meio-ambiente.</p></div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>HTML, CSS e JavaScript.</div>
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='MinhaPokedex' onClick={() => redirecionarParaURL(3)}></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto' id='TextoLoading'>Minha Pokédex</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>Um Website que, através de um API, puxa as informações de alguns pokemons.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>HTML, CSS, ReactJS e API.</div>
                </div>
            </div>
            <div className='BoxProjeto' id='BoxProjetoDireito'>
                    <div className='IMGProjetos' ><div className='loading'></div></div>
                    <div className='DescrBoxProjeto' id='DescrBoxProjetoDireito'>
                    <div className='NomeBoxProjeto' id='NomeBoxProjetoDireito'>Em Breve</div>
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