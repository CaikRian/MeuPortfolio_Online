import './style.css'

function Footer(){
    return(
        <footer>
        <div class='PrimeiraLinha'>
            <span>Desenvolvido por <strong>Caik</strong></span>
            <span>caik.job1707@gmail.com</span>
            <span>Portfólio Online</span>
        </div>

        <div class='Links'>
            <a href="#home">Home</a>
            <a href="#sobre-mim">Sobre Mim</a>
            <a href="#experiencia-profissional">Experiência Profissional</a>
            <a href="#experiencia-academica">Experiência Acadêmica</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
        </div>

        <div class='SegundaLinha'>
            <span>Esse site foi criado com <strong>React</strong></span>
        </div>
        </footer>

    );
}
export default Footer;