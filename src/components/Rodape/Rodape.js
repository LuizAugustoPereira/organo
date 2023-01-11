import './Rodape.css'

const Rodape = () => {

    return (
        <footer className='footer'>
            <section className='redes-sociais-icones'>       
                <a href='https://facebook.com/aluraonline' target='_blank'>
                    <img src="/imagens/fb.png" alt="logo do facebook" />
                </a>
                <a href='https://twitter.com/aluraonline' target='_blank'>
                    <img src="/imagens/tw.png" alt="logo do twitter" />
                </a>
                <a href='https://instagram.com/aluraonline' target='_blank'>
                    <img src="/imagens/ig.png" alt="logo do instagram" />
                </a>
            </section>
            <img src="/imagens/logo.png" alt="logo do organo" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape