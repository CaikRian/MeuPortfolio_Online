
import './style.css';
import logo_html from "./img/logo_html.png"
import logo_css from "./img/logo_css.png"
import logo_javascript from "./img/logo_javascript.png"
import logo_react from "./img/logo_react.png"

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
                    <div className='TextoBoxProjeto'>
                        <img className='ImgFerramentas' src={logo_html}></img>
                        <img className='ImgFerramentas' src={logo_css}></img>
                    </div>
                    
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='HelpEarth' onClick={() => redirecionarParaURL(2)}></div>
                    <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>Help Earth</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>Help Earth é um site fictício de notícias focadas no meio-ambiente.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>
                        <img className='ImgFerramentas' src={logo_html}></img>
                        <img className='ImgFerramentas' src={logo_css}></img>
                        <img className='ImgFerramentas' src={logo_javascript}></img>
                    </div>
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='MinhaPokedex' onClick={() => redirecionarParaURL(3)}></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto' id='TextoLoading'>Minha Pokédex</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>Um Website que, através de um API, puxa as informações de todos os pokemons que existem no universo de Pokemon.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>
                        <img className='ImgFerramentas' src={logo_html}></img>
                        <img className='ImgFerramentas' src={logo_css}></img>
                        <img className='ImgFerramentas' src={logo_javascript}></img>
                        <img className='ImgFerramentas' src={logo_react}></img>
                    </div>
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='EmBreve'><div className='loading'></div></div>
                    <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>Em Breve</div>
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