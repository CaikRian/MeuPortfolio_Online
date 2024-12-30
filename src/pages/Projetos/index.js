
import './style.css';
import React, { useEffect } from 'react';
import logo_html from "./img/logo_html.png"
import logo_css from "./img/logo_css.png"
import logo_javascript from "./img/logo_javascript.png"
import logo_react from "./img/logo_react.png"
import logo_api from "./img/logo_api.png"
import logo_bootstrap from "./img/logo_bootstrap.png"
import ProjetoDestaque from "./video/RetroGlam.mp4"
import logo_RetroGlam from "./img/logo_RetroGlam.png"
import logo_Hospital_flor_da_vida from "./img/logo_Hospital-flor-da-vida.jpeg"
import logo_php from "./img/logo_php.png"



function Projetos(){
    useEffect(() => {
        // Verificar se há um ID na URL
        if (window.location.hash) {
          // Extrair o ID da URL, removendo o caractere "#" inicial
          const id = window.location.hash.substring(1);
    
          // Encontrar o elemento com o ID correspondente
          const elemento = document.getElementById(id);
    
          if (elemento) {
            // Rolar suavemente até o elemento
            elemento.scrollIntoView();
          }
        }
      }, []); // O array vazio [] garante que o efeito só será executado uma vez, no momento do montagem do componente.
    

    const redirecionarParaURL = (op) => {
        if(op === 1){
            window.location.href = '';
        }else if(op === 2){
            window.location.href = 'https://site-help-earth.vercel.app/';
        }else if(op === 3){
            window.location.href = 'https://minha-pokedex.vercel.app/';
        }else if(op === 4){
            window.location.href = 'https://retro-glam-couture.vercel.app/';
        }else if(op === 5){
            window.location.href = 'https://sorriso-prime-dental.vercel.app/';
        }else if(op === 6){
            window.location.href = 'https://github.com/CaikRian/Hospital-Flor-da-Vida';
        }
        
      };

    return(
       <main id='PageProjetos'>
        <div className='TituloSection'>Meu Projetos</div>
        <div className='SubTituloSection'>Em Destaque:</div>
        <div id='ProjetoDestaque'>
            <div id='DescrProjDest'>
                <img src={logo_RetroGlam}/>
                <p className='titProjDest'>RetroGlam Culture</p>
                <p className='sobreProjDest'>A RetroGlam Couture é uma marca de moda que combina a elegância intemporal de 
                        décadas passadas com elementos contemporâneos.</p>
                <p className='linkProjDest' onClick={() => redirecionarParaURL(4)}>Clique aqui para visitar</p>
            </div>
            <video src={ProjetoDestaque} autoPlay loop muted />
        </div>
        
        <div className='ConteinerProjetos' id='Tela1Projetos'>
              {/* <div className='BoxProjeto'>
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
            </div>  */} 
            {/* Atualização de projeto */}
            
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
                    <div className='TextoBoxProjeto'>Um Website que, através de um API, puxa as informações de todos 
                        os pokemons que existem no universo de Pokemon.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>
                        <img className='ImgFerramentas' src={logo_html}></img>
                        <img className='ImgFerramentas' src={logo_css}></img>
                        <img className='ImgFerramentas' src={logo_javascript}></img>
                        <img className='ImgFerramentas' src={logo_react}></img>
                        <img className='ImgFerramentas' src={logo_api}></img>
                        
                    </div>
                </div>
            </div>
            <div className='BoxProjeto'>
                    <div className='IMGProjetos' id='RetroGlam' onClick={() => redirecionarParaURL(4)}></div>
                <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto' id='TextoLoading'>RetroGlam C.</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'> Seu website funciona como uma plataforma de comércio eletrônico, 
                        onde os clientes podem adquirir peças de moda retrô. </div>
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
                    <div className='IMGProjetos' id='SorrisoPrime' onClick={() => redirecionarParaURL(5)}></div>
                    <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>SorrisoPrime D.</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>É uma plataforma inovadora que une 
                    tecnologia e cuidados personalizados para oferecer uma experiência odontológica excepcional.</div>
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
                    <div className='IMGProjetos' id='Hospital_flor_da_vida' onClick={() => redirecionarParaURL(6)}></div>
                    <div className='DescrBoxProjeto'>
                    <div className='NomeBoxProjeto'>Hosp. Flor da Vida</div>
                    <div className='ResumoBoxProjeto'>Descrição</div>
                    <div className='TextoBoxProjeto'>Site fictício para cadastro e gerenciamento de pacientes em um hospital, oferecendo uma interface intuitiva para médicos registrarem e administrarem informações, agendamentos, exames e diagnósticos.</div>
                    <div className='ResumoBoxProjeto'>Ferramentas</div>
                    <div className='TextoBoxProjeto'>
                        <img className='ImgFerramentas' src={logo_html}></img>
                        <img className='ImgFerramentas' src={logo_css}></img>
                        <img className='ImgFerramentas' src={logo_javascript}></img>
                        <img className='ImgFerramentas' src={logo_php}></img>
                        <img className='ImgFerramentas' src={logo_bootstrap}></img>
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