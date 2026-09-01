function App() {
  /* tudo de fora é js */

  /* tudo dentro do () é html */

  return (
    <>
      <nav className="py-2 flex items-center px-4 fixed  top-0 w-full shadow bg-white">

        <a className="p-2 mr-2 hover:bg-primary" href="#about">Sobre</a>
        <a className="p-2 mr-2 hover:bg-primary" href="#prices">Preços</a>
        <a className="p-2 mr-2 hover:bg-primary" href="#features">Benefícios</a>
        <a className="p-2 mr-5 px-4 bg-primary hover:shadow-inner text-white rounded text-white ml-auto shadow" href="auth.html">Acessar</a>
      </nav>

      <main>
        <section>
          <div className="max-w-lg mx-auto py-6">
            <h1 className="text-center">duoLIBRAS</h1>
            <div className="flex gap-8 ">
              <article>

                <p> O duoLIBRAS tem como proposta o aprendizado de forma dinâmica, acessível e lúdica.
                  Nosso APP possui acesso livre, fazer o login é o suficiente e você já poderá aprender na
                  plataforma.
                  Os níveis servem de referência de aprendizado, começando com conteúdos básicos e
                  avançando
                  aos
                  poucos.
                </p>

              </article>


              <article>
                <p> O duoLIBRAS tem como proposta o aprendizado de forma dinâmica, acessível e lúdica.
                  Nosso APP possui acesso livre, fazer o login é o suficiente e você já poderá aprender na
                  plataforma.
                  Os níveis servem de referência de aprendizado, começando com conteúdos básicos e
                  avançando
                  aos
                  poucos.
                </p>

              </article>
            </div>

          </div>

        </section>

        <section>
          <div className="">
       
              <article>
                <h3>Acessibilidade na educação</h3>
                <p> Ao criar o projeto, o assunto monetário nunca se fez prioridade, <i>possibilitar</i> que
                  crianças
                  possam aprender Libras de forma simples foi.</p>
                <p>Esse projeto não nasce com a ideia de gerar fundos para a equipe, mas com um propósito
                  social de
                  expandir conhecimento mundo a fora. </p>
              </article>
        
          </div>

        </section>

        <section>

          <article>
            <h2>Beneficios de acessar o duoLIBRAS</h2>
            <p> 1. Aumente seu repertório social e interaja com mais facilidade
              2. A plataforma e dinâmica e de fácil acesso.
              3. Aprendizado nunca é demais.
            </p>
          </article>

        </section>

      </main>

      <footer>

      </footer>
    </>
  )
}



export default App;