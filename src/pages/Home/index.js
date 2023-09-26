import './style.css'
import {Link} from 'react-router-dom';
import Icon_GitHub from './Img/github-mark.png';
import Icon_Linkedin from './Img/LI-In-Bug.png';
import Icon_People from './Img/Icon_People.svg';


function Home() {
        
    
            window.addEventListener("scroll", function() {

                const Section2 = document.getElementById('section2');
                const Section3 = document.getElementById('section3');
                const Section4 = document.getElementById('section4');
                const Section5 = document.getElementById('section5');
                var scrollPosition = window.scrollY;    
    
                if(Section2 || Section3 || Section4 || Section5){

                if (scrollPosition > 100 && scrollPosition < 1200) {
                    Section2.style.opacity = '5';
                } else {
                    Section2.style.opacity = '-10';
                }
                
                if (scrollPosition > 1000 && scrollPosition < 1600) {
                    Section3.style.opacity = '5';
                } else {
                    Section3.style.opacity = '-10';
                }
    
                if (scrollPosition > 1400 && scrollPosition < 2000) {
                    Section4.style.opacity = '5';
                } else {
                    Section4.style.opacity = '-10';
                }
    
                if (scrollPosition > 1900) {
                    Section5.style.opacity = '5';
                } else {
                    Section5.style.opacity = '-10';
                }
    
                
                }}); 

    function  mudaEtec() {
            const TitInst = document.getElementById('TitInst');
            const CursoInst = document.getElementById('CursoInst');
            const StatusInst = document.getElementById('StatusInst');
            const DataInst = document.getElementById('DataInst');
            const BtnInst = document.getElementById('ETEC');
            const BtnInst2 = document.getElementById('UNIP');
            const BtnInst3 = document.getElementById('FMU');

            TitInst.textContent = 'ETEC';
            CursoInst.textContent = 'Análise e Desenvolvimento de Sistemas';
            StatusInst.textContent = 'Concluído';
            DataInst.textContent = '01/2019 até 12/2021';
            BtnInst.style.boxShadow = 'rgb(255, 255, 255) 0px 2px 10px 1px';
            BtnInst2.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
            BtnInst3.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
            BtnInst.style.transform = 'scale(1.2)';
            BtnInst2.style.transform = 'none';
            BtnInst3.style.transform = 'none';
    }
    function  mudaUnip() {
        const TitInst = document.getElementById('TitInst');
        const CursoInst = document.getElementById('CursoInst');
        const StatusInst = document.getElementById('StatusInst');
        const DataInst = document.getElementById('DataInst');
        const BtnInst = document.getElementById('ETEC');
        const BtnInst2 = document.getElementById('UNIP');
        const BtnInst3 = document.getElementById('FMU');
        BtnInst.style.transform = 'none';
        BtnInst2.style.transform = 'scale(1.2)';
        BtnInst3.style.transform = 'none';

    
        TitInst.textContent = 'UNIP';
        CursoInst.textContent = 'Ciência da Computação';
        StatusInst.textContent = 'Trancado';
        DataInst.textContent = '01/2022 até 06/2022';
        BtnInst.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
        BtnInst2.style.boxShadow = 'rgb(255, 255, 255) 0px 2px 10px 1px';
        BtnInst3.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
       
    }
    function  mudaFmu() {
        const TitInst = document.getElementById('TitInst');
        const CursoInst = document.getElementById('CursoInst');
        const StatusInst = document.getElementById('StatusInst');
        const DataInst = document.getElementById('DataInst');
        const BtnInst = document.getElementById('ETEC');
        const BtnInst2 = document.getElementById('UNIP');
        const BtnInst3 = document.getElementById('FMU');
        BtnInst.style.transform = 'none';
        BtnInst2.style.transform = 'none';
        BtnInst3.style.transform = 'scale(1.2)';

        TitInst.textContent = 'FMU';
        CursoInst.textContent = 'Ciência da Computação';
        StatusInst.textContent = 'Em Andamento';
        DataInst.textContent = '07/2022 até 06/2026';
        BtnInst.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
        BtnInst2.style.boxShadow = 'rgba(255, 255, 255, 0) 0px 2px 10px 1px';
        BtnInst3.style.boxShadow = 'rgb(255, 255, 255) 0px 2px 10px 1px';
        }

    return(

        <main>
           <article id='section1'>
            <div id='titulo'>
           <span className='titFrase'>Oi, tudo bem? Meu nome é Caik.</span>
           <span className='titFrase'>Seja bem-vindo(a) ao meu portfólio online. :)</span>
           
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
                <div className='Selfie'></div>
                <div className='BordaSelfie'></div>
            </div>
            <div className='CampoSobre'>
                <h1 id='TitSobreMim'>Sobre mim</h1>
                <span>&nbsp;Meu primeiro contato com a tecnologia foi aos 12 anos, quando ganhei o meu primeiro celular. 
                    Achava um máximo, a ideia de uma “pequena caixa” carregar tanto conteúdo. Desde então, sempre tive a curiosidade 
                    e a vontade de entender aprender como é o sistema por trás daqueles aplicativos e sites que tanto acessamos.
                    </span>
                    <br/>
                <span>&nbsp;Nos meus 15 anos, consegui passar no vestibular para o curso técnico de desenvolvimento de sistemas integrado 
                    ao ensino médio, da ETEC. Foi a partir deste curso, que eu realmente tive a primeira experiência na criação e 
                    desenvolvimento de um sistema web.
                    </span>
                    <br/>
                <span>&nbsp;Sou técnico formado em Análise e Desenvolvimento de Sistemas, pela ETEC. Atualmente, 
                    estou na minha graduação em Ciência da Computação, pela FMU - Faculdades Metropolitanas Unidas.
                </span>
            </div>
           </article>
           <article id='section3' className='section3'>
            <div id='TitFormAcad' className='titulo'>Formação Acadêmica</div>
            <div className='CampoFAcad'>
                <div className='instituicao'>
                    <div id='ETEC' className='ImgInstituicao' onClick={mudaEtec}></div>
                    
                </div>
                <div className='pontinhos'> </div>
                <div className='instituicao'>
                    <div id='UNIP' className='ImgInstituicao' onClick={mudaUnip}></div>
                    
                </div>
                <div className='pontinhos'></div>
                <div className='instituicao'>
                    <div id='FMU' className='ImgInstituicao' onClick={mudaFmu}></div>
                    
                </div>
            </div>
            <div id='FundoInst'>
            <div className='DescFAcad'>
                <h3><div className='TextoInst'>Instituição:</div><span id='TitInst'>ETEC</span></h3>
                <h3><div className='TextoInst'>Curso:</div><span id='CursoInst'>Análise e Desenvolvimento de Sistemas</span></h3>
                <h3><div className='TextoInst'>Status:</div><span id='StatusInst'>Concluído</span></h3>
                <h3><div className='TextoInst'>Data:</div><span id='DataInst'>01/2019 até 12/2021</span></h3>
            </div>
            </div>
            </article>
            <article id='section4' className='section4'>
                <div id='TitExpProf' className='titulo'>Experiência Profissional</div>
                <div className='CampoExpProf'>
                    <div className='ImgExpProf'><Link to='#'><img src={Icon_People}></img></Link></div>
                    <div className='DescExpProf'>
                        <span className='TitleExpProf'>Empresa</span>
                        <span>&nbsp;ERP Solutions Ltda</span>
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
                            <div className='BarraHabilidadeNegativa'></div>
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
                            <div className='NomeHabilidade'>GitHub</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                        </div>
                        <div className='BoxHabilidade'>
                            <div className='NomeHabilidade'>GitBash</div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidade'></div>
                            <div className='BarraHabilidadeNegativa'></div>
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