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
            <a href="/#">Home</a>
            <a href="/#TitSobreMim">Sobre Mim</a>
            <a href="/#TitExpProf">Experiência Profissional</a>
            <a href="/#TitFormAcad">Experiência Acadêmica</a>
            <a href="/#TitHabild">Habilidades</a>
            <a href="/Projetos/#">Projetos</a>
        </div>

        <div class='SegundaLinha'>
            <span>Esse site foi criado com <strong>React</strong></span>
        </div>
        </footer>

    );
}
export default Footer;