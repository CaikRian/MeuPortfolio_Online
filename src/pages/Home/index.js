import './style.css'
import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import Icon_GitHub from './Img/github-mark.png';
import Icon_Linkedin from './Img/LI-In-Bug.png';
import Icon_People from './Img/Icon_People.svg';



function Home() {
        
    
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
    

    return(
        

        <main>
           <article id='section1'>
            <div id='titulo'>
           <span className='titFrase'>Oi, tudo bem? Meu nome é Caik.</span>
           <span className='titFrase' id='EfeitoDigito'>Seja bem-vindo(a) ao meu portfólio online.</span>
           
           <div className='opcoes'>
            <Link to='https://github.com/CaikRian'><img src={Icon_GitHub}></img></Link>
            <Link to='https://www.linkedin.com/in/caikrian'><img src={Icon_Linkedin}></img></Link>
            </div>
           </div>
           <div id='imagemTitulo'>CK</div>
           <a href='#TitSobreMim'><div className='seta'></div></a>
           </article> 
           <article id='section2' className='section2'>
            <div className='CampoSelfie'>
                <div className='Selfie'>
                    <div className='BordaSelfie'></div>
                </div>
                
            </div>
            <div className='CampoSobre'>
                <h1 id='TitSobreMim'>Sobre mim</h1>
                <span>&nbsp;Meu nome é Caik Rian, tenho 20 anos e moro em Osasco-SP. 
                    Desde cedo, meu fascínio pela tecnologia e sistemas de computação me impulsionou a buscar conhecimento na área.
                      Iniciei minha jornada acadêmica na ETEC, onde me formei como Técnico em Análise e Desenvolvimento de Sistemas.
                       Atualmente, estou trilhando um novo capítulo em minha vida acadêmica enquanto curso Ciência da Computação na FMU.
                    </span>
                    <br/>
                <span>&nbsp;Minha paixão por resolver problemas e criar soluções me motiva a buscar constantemente desafios na área de tecnologia. 
                    Além dos estudos, dedico meu tempo livre para projetos pessoais de programação e desenvolvimento de software, 
                    buscando aprimorar minhas habilidades. Acredito que a combinação de conhecimento técnico e criatividade é a chave para enfrentar os desafios complexos que a computação oferece.
                    </span>
                    <br/>
                <span>&nbsp;Além da tecnologia, tenho diversos interesses, incluindo música e seriados, 
                    que me ajudam a manter um equilíbrio entre a mente e o corpo. Estou comprometido em crescer profissionalmente, 
                    compartilhar meu conhecimento e continuar explorando as infinitas possibilidades que o mundo da computação 
                    tem a oferecer. Minha jornada está apenas começando, e estou ansioso para cada novo desafio e conquista que 
                    o futuro me reserva.
                </span>
            </div>
           </article>
           <article id='section3' className='section3'>
            <div id='TitFormAcad' className='titulo'>Formação Acadêmica</div>
            <div className='CampoFAcad'>
                <div className='instituicao'>
                    <div id='ETEC' className='ImgInstituicao'>
                        <span id='TitInst'>ETEC</span>
                        <span id='CursoInst'>Análise e Desenvolvimento de Sistemas</span>
                        <span id='StatusInst'>Concluído</span>
                        <span id='DataInst'>01/2019 até 12/2021</span>
                    </div>
                    
                </div>
                
                <div className='instituicao'>
                    <div id='UNIP' className='ImgInstituicao' >
                        <span id='TitInst'>UNIP</span>
                        <span id='CursoInst'>Ciência da Computação</span>
                        <span id='StatusInst'>Trancado</span>
                        <span id='DataInst'>01/2022 até 06/2022</span>
                    </div>
                    
                </div>
               
                <div className='instituicao'>
                    <div id='FMU' className='ImgInstituicao'>
                        <span id='TitInst'>FMU</span>
                        <span id='CursoInst'>Ciência da Computação</span>
                        <span id='StatusInst'>Em Andamento</span>
                        <span id='DataInst'>07/2022 até 06/2026</span>
                    </div>
                    
                </div>
            </div>
            </article>
            <article id='section4' className='section4'>
                <div id='TitExpProf' className='titulo'>Experiência Profissional</div>
                <div className='CampoExpProf'>
                    <div className='ImgExpProf'><img src={Icon_People}></img></div>
                    <div className='DescExpProf'>
                        <span className='TitleExpProf'>Empresa</span>
                        <span>&nbsp;ERP Solutions Ltda.</span>
                        <br/>
                        <span className='TitleExpProf'>Cargo</span>
                        <span>&nbsp;Estágio em Análise e Desenvolvimento de Sistemas - 03/2023 até 07/2023</span>
                        <br/>
                        <span className='TitleExpProf'>Principais Atividades</span>
                        <span>&nbsp;Prestar suporte aos clientes; auxiliar nos testes em condições operacionais; 
                            auxiliar na codificação dos programas informatizados; elaborar documentações de sistemas 
                            contemplando normas e procedimentos de operação, rotinas de segurança e manutenção.
                        </span>
                    </div>
                </div>
                </article>
            <article id='section5'className='section5'>
                <div id='TitHabild' className='titulo'>Habilidades</div>
                <div id='CampoConhecimento'>
                    <div className='BoxConhecimento'>
                        <div className='NomeBox'>IDIOMAS</div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Português</div>
                           
                                <div className='BarraHabilidade'></div>
                                <div className='BarraHabilidade'></div>
                                <div className='BarraHabilidade'></div>
                            
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Inglês</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Espanhol</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                    </div>
                    <div className='BoxConhecimento'>
                        <div className='NomeBox'>LINGUAGENS</div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>HTML</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>CSS</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>JavaScript</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Java</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Python</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>PHP</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>C</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>C++</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>C#</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>SQL</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>ADVPL</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                    </div>
                    <div className='BoxConhecimento'>
                        <div className='NomeBox'>SOFTWARE/FRAMEWORKS</div>
                    <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>React</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>GIMP</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Photoshop</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>FIGMA</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Pac. Office</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>PowerBI</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Git</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>Protheus</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>SAP B. One</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
                        </div>
                        
                    

                    </div>
                </div> 
            </article>

        </main>

        
    
    );

}
export default Home;