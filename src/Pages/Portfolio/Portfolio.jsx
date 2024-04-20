/* ===== Css =====*/

import styles from './Portfolio.module.css'; // Importe os estilos principais
import responsivoStyles from './PortfolioResponsivo.module.css'; // Importe os estilos responsivos

/* ===== Componentes ===== */
import Header from '../../Components/Header';
import WhatsAppIcon from '../../Components/WhatsIcon/WhatsAppIcon';
import Footer from '../../Components/Footer';

/* ===== Imagens =====*/

import Logo from '../../Assets/Logo.png';

/* ===== Curriculo ===== */

import CvEmerson from '../../Assets/CV/CV_emersonsales.pdf';

/* ===== Icons ===== */

import CssIcon from '../../Assets/Icons/CSS.png';
import FigmaIcon from '../../Assets/Icons/Figma.png';
import HtmlIcon from '../../Assets/Icons/HTML.png';
import JavascriptIcon from '../../Assets/Icons/JavaScript.png';
import ReactJsIcon from '../../Assets/Icons/ReactJS.png';
import Vector from '../../Assets/Icons/Vector.png';

/* ===== Icons Redes ===== */

import Email from '../../Assets/Icons/IconsRedes/Email.png';
import Figma from '../../Assets/Icons/IconsRedes/Figma.png';
import GitHub from '../../Assets/Icons/IconsRedes/GitHub.png';
import LinkedIn from '../../Assets/Icons/IconsRedes/LinkedIn.png';
import WhatsApp from '../../Assets/Icons/IconsRedes/WhatsApp.png';

import React, { useRef } from "react";

function Portfolio() {

    const myPhoneNumber = '+5511916336118';
    const defaultMessage = 'Oi! Estou no site e queria [insira o motivo]. Alguma chance de conversarmos? Obrigado!';

    const sobre = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    const abrirCurriculo = () => {
        window.open(CvEmerson, '_blank');
    };

    const abrirConversaWhatsApp = () => {
        const numeroWhatsApp = '5511916336118'; // Insira o número de telefone do WhatsApp
        const defaultMessage = 'Oi! Estou no site e queria [insira o motivo]. Alguma chance de conversarmos? Obrigado!';

        // Construa o link do WhatsApp com o número de telefone
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(defaultMessage)}`;

        // Abre a conversa no WhatsApp em uma nova aba
        window.open(urlWhatsApp, '_blank');
    };

    const meuEmail = 'emersonsantossales245@gmail.com';

    return (
        <div>
            <Header />

            <div className={`${styles.Inicio} ${responsivoStyles.Inicio}`}>
                <div className={`${styles.Name} ${responsivoStyles.Name}`}>
                    <h1>
                        Olá, eu sou o
                        <span className={styles.Azul}> Emerson Sales</span><span className={styles.Laranja}>.</span>
                    </h1>
                </div>
                <button onClick={() => scrollTo(sobre)} className={`${styles.btn_sobre_mim} ${responsivoStyles.btn_sobre_mim}`}>
                    Sobre mim
                </button>
                <div className={`${styles.LogoContainer} ${responsivoStyles.LogoContainer}`}>
                    <a
                        href="https://github.com/emersonslls"
                        target="_blank"
                    >
                        <span></span>
                        <img src={Logo} />
                    </a>
                </div>
            </div>

            <div className={`${styles.Bem_Vindos} ${responsivoStyles.Bem_Vindos}`}>
                <div className={`${styles.Name_Bem_Vindos} ${responsivoStyles.Name_Bem_Vindos}`}>
                    <h1>
                        Bem-vindos ao meu
                        <span className={styles.Azul}> Portfólio</span><span className={styles.Laranja}>!</span>
                    </h1>
                </div>
                <div className={`${styles.Bem_Vindos_Portfolio} ${responsivoStyles.Bem_Vindos_Portfolio}`}>
                    <h2>
                        Bem-vindos ao meu Portfolio! Sou um desenvolvedor front-end e entusiasta de UI/UX na fase júnior. Aqui você encontrará uma amostra do meu trabalho e projetos em constante evolução. Sinta-se à vontade para explorar e entrar em contato para colaborações ou feedback. Obrigado pela visita!
                    </h2>
                </div>
                <div className={`${styles.Meus_Projetos} ${responsivoStyles.Meus_Projetos}`}>
                    <h1>
                        Meus
                        <span className={styles.Azul}> Projetos</span><span className={styles.Laranja}>!</span>
                    </h1>
                </div>
                <div className={`${styles.Projetos} ${responsivoStyles.Projetos}`}>
                    <div className={`${styles.Card_Projeto_MyService} ${responsivoStyles.Card_Projeto_MyService}`}>
                        <div className={`${styles.Name_Projeto_MyService} ${responsivoStyles.Name_Projeto_MyService}`}>
                            <h1>
                                Projeto
                                <span className={styles.MyService}> My Service</span>
                            </h1>
                        </div>
                        <div className={`${styles.Informacoes_Projeto_MyService} ${responsivoStyles.Informacoes_Projeto_MyService}`}>
                            <h1>
                                O Projeto My Service foi desenvolvido por mim e outras três pessoas como parte do nosso TCC.
                            </h1>
                            <h2>
                                O My Service é uma plataforma inovadora para profissionais autônomos e clientes. Oferece recursos como visualização de imagens e avaliações para contratação informada. Profissionais autônomos podem criar perfis detalhados, compartilhando habilidades e projetos anteriores.
                            </h2>
                            <h3>
                                Nosso objetivo é simplificar a conexão entre autônomos e clientes, proporcionando uma experiência completa e confiável.
                            </h3>
                        </div>
                        <div className={`${styles.Btns_MyService} ${responsivoStyles.Btns_MyService}`} >
                            <div className={`${styles.Info_Projeto_MySevice} ${responsivoStyles.Info_Projeto_MySevice}`}>
                                <h1>
                                    Landing Page, responsiva
                                </h1>
                            </div>
                            <a href="https://mysservice.vercel.app" target="_blank">
                                <button className={`${styles.btn_veja_mais_MyService} ${responsivoStyles.btn_veja_mais_MyService}`}>
                                    Veja mais
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.Card_Projeto_CocaCola} ${responsivoStyles.Card_Projeto_CocaCola}`}>
                        <div className={`${styles.Name_Projeto_CocaCola} ${responsivoStyles.Name_Projeto_CocaCola}`}>
                            <h1>
                                Projeto
                                <span className={styles.CocaCola}> Coca-Cola</span>
                            </h1>
                        </div>
                        <div className={`${styles.Informacoes_Projeto_CocaCola} ${responsivoStyles.Informacoes_Projeto_CocaCola}`}>
                            <h1>
                                O Projeto Coca-Cola foi desenvolvido por mim, a pedido de uma cliente para o seu TCC de inglês.
                            </h1>
                            <h2>
                                Este projeto teve como objetivo apresentar informações sobre a Coca-Cola, incluindo sua história, seu fundador e algumas marcas afiliadas. Foi desenvolvido para a disciplina de Inglês, onde incluímos a troca de idioma no site para atender aos requisitos do curso. Infelizmente, a cliente precisou alterar o tema do seu projeto, e a landing page não foi mais necessária.
                            </h2>
                            <h3>
                                Portanto, decidi remover as informações sobre o grupo e apenas disponibilizei o projeto no GitHub, pois não havia mais a necessidade de publicá-lo na web.
                            </h3>
                        </div>
                        <div className={`${styles.Btns_CocaCola} ${responsivoStyles.Btns_CocaCola}`} >
                            <div className={`${styles.Info_Projeto_CocaCola} ${responsivoStyles.Info_Projeto_CocaCola}`} >
                                <h1>
                                    Landing Page, responsiva
                                </h1>
                            </div>
                            <a href="https://github.com/emersonslls/Coca-Cola" target="_blank">
                                <button className={`${styles.btn_veja_mais_CocaCola} ${responsivoStyles.btn_veja_mais_CocaCola}`} >
                                    Veja mais
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.Card_Projeto_Cars} ${responsivoStyles.Card_Projeto_Cars}`}>
                        <div className={`${styles.Name_Projeto_Cars} ${responsivoStyles.Name_Projeto_Cars}`}>
                            <h1>
                                Projeto
                                <span className={styles.Cars}> c&e cars</span>
                            </h1>
                        </div>
                        <div className={`${styles.Informacoes_Projeto_Cars} ${responsivoStyles.Informacoes_Projeto_Cars}`}>
                            <h1>
                                Este projeto está sendo um redesign de um dos meus primeiros projetos desenvolvidos.
                            </h1>
                            <h2>
                                Este projeto de redesign é uma etapa no meu aprendizado. Estou explorando funcionalidades da programação e utilizando-o para aprimorar habilidades. Dedicando tempo para experimentar conceitos e resolver desafios, mesmo em andamento.
                            </h2>
                            <h3>
                                Este projeto está me ajudando a expandir meu conhecimento e aprimorar minhas habilidades de desenvolvimento de software.
                            </h3>
                        </div>
                        <div className={`${styles.Btns_Cars} ${responsivoStyles.Btns_Cars}`}>
                            <div className={`${styles.Info_Projeto_Cars} ${responsivoStyles.Info_Projeto_Cars}`}>
                                <h1>
                                    Em desemvolvimento...
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.Card_Projeto_Andamento} ${responsivoStyles.Card_Projeto_Andamento}`}>
                        <div className={`${styles.Name_Projeto_Andamento} ${responsivoStyles.Name_Projeto_Andamento}`}>
                            <h1>
                                Projetos em
                                <span className={styles.Andamneto}> Andamento</span>
                            </h1>
                        </div>
                        <div className={`${styles.Informacoes_Projeto_Andamneto} ${responsivoStyles.Informacoes_Projeto_Andamneto}`}>
                            <h1>
                                Estes projetos estão em andamento...
                            </h1>
                            <h2>
                                Estou atualmente envolvido em vários projetos de estudo em diferentes estágios de desenvolvimento. Cada um desses projetos representa uma oportunidade valiosa para aprimorar minhas habilidades em programação. Enquanto me dedico a eles, estou constantemente explorando novas funcionalidades e expandindo meu conhecimento em diversas áreas.
                            </h2>
                            <h3>
                                Apesar dos desafios que possam surgir, estou comprometido em avançar em cada projeto, buscando sempre novas soluções e aprendizados.
                            </h3>
                        </div>
                        <div className={`${styles.Btns_Andamento} ${responsivoStyles.Btns_Andamento}`}>
                            <div className={`${styles.Info_Projeto_pro_GitHub} ${responsivoStyles.Info_Projeto_pro_GitHub}`}>
                                <h1>
                                    Esses projetos estarão em breve no meu GitHub
                                </h1>
                            </div>
                            <div className={`${styles.Info_Projeto_Andamento} ${responsivoStyles.Info_Projeto_Andamento}`}>
                                <h1>
                                    Em andamento...
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.Sobre} ${responsivoStyles.Sobre}`} ref={sobre}>
                <div className={`${styles.Name2} ${responsivoStyles.Name2}`}>
                    <h1>
                        Emerson Sales<span className={styles.Laranja}>!</span>
                    </h1>
                </div>
                <div className={`${styles.Informacoes_Sobre_Mim} ${responsivoStyles.Informacoes_Sobre_Mim}`}>
                    <h1>
                        Olá, meu nome é Emerson Santos Sales, tenho 18 anos e sou um ex-aluno da Etec, onde me formei em Desenvolvimento de Sistemas. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na UNIP.
                    </h1>
                    <h2>
                        Desenvolvi uma paixão especial pela área de front-end e design ao longo do curso na Etec e estou em busca de oportunidades de trabalho onde eu possa aplicar e aprimorar essas habilidades.
                    </h2>
                    <h3>
                        Estou entusiasmado em ingressar nesse campo dinâmico e criativo, e estou pronto para contribuir com minha energia e dedicação para alcançar os objetivos da equipe e da empresa.
                    </h3>
                </div>
                <button onClick={abrirCurriculo} className={`${styles.btn_carregue_CV} ${responsivoStyles.btn_carregue_CV}`}>
                    Confira meu CV<img src={Vector} />
                </button>
            </div>

            <div className={`${styles.Minhas_Habilidades} ${responsivoStyles.Minhas_Habilidades}`}>
                <div className={`${styles.Text_Habilidade} ${responsivoStyles.Text_Habilidade}`}>
                    <h1>
                        Habilidades<span className={styles.Laranja}>:</span>
                    </h1>
                </div>
                <div className={`${styles.Habilidades} ${responsivoStyles.Habilidades}`}>
                    <div className={`${styles.Html} ${responsivoStyles.Html}`}>
                        <img src={HtmlIcon} />
                        <div className={`${styles.Name_HTML} ${responsivoStyles.Name_HTML}`}>
                            <h1>HTML</h1>
                        </div>
                        <div className={`${styles.Nivel_Html} ${responsivoStyles.Nivel_Html}`} /* ==== Meu nivel de habilidade ==== */>
                            <h1>
                                Tenho habilidades em HTML um pouco mais que básicas. Sou capaz de criar estruturas simples de páginas da web, incluindo elementos como textos, imagens, links e listas. Estou em constante aprendizado para aprimorar minhas habilidades e expandir meu conhecimento em HTML e outras tecnologias web.
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.Css} ${responsivoStyles.Css}`}>
                        <img src={CssIcon} />
                        <div className={`${styles.Name_CSS} ${responsivoStyles.Name_CSS}`}>
                            <h1>CSS</h1>
                        </div>
                        <div className={`${styles.Nivel_Css} ${responsivoStyles.Nivel_Css}`} /* ==== Meu nivel de habilidade ==== */>
                            <h1>
                                Tenho habilidades avançadas em CSS, incluindo o uso de CSS modules. Sou capaz de estilizar elementos HTML de forma eficiente, aplicar técnicas de layout como flexbox e grid, e criar interfaces responsivas. Continuo aprimorando minhas habilidades para acompanhar as tendências e práticas mais recentes em design web.
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.JavaScript} ${responsivoStyles.JavaScript}`}>
                        <img src={JavascriptIcon} />
                        <div className={`${styles.Name_JavaScript} ${responsivoStyles.Name_JavaScript}`}>
                            <h1>JavaScript</h1>
                        </div>
                        <div className={`${styles.Nivel_JavaScript} ${responsivoStyles.Nivel_JavaScript}`} /* ==== Meu nivel de habilidade ==== */>
                            <h1>
                                Tenho conhecimentos básicos em JavaScript, capaz de criar interatividade em páginas web simples e manipular elementos HTML. Estou comprometido em aprimorar minhas habilidades nesta linguagem
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.Figma} ${responsivoStyles.Figma}`}>
                        <img src={FigmaIcon} />
                        <div className={`${styles.Name_Figma} ${responsivoStyles.Name_Figma}`}>
                            <h1>Figma</h1>
                        </div>
                        <div className={`${styles.Nivel_Figma} ${responsivoStyles.Nivel_Figma}`} /* ==== Meu nivel de habilidade ==== */>
                            <h1>
                                Tenho habilidades razoáveis em Figma, capaz de criar designs e protótipos básicos para projetos de interface de usuário. Estou comprometido em aprimorar minhas habilidades nesta ferramenta para desenvolver designs mais complexos e profissionais no futuro.
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.ReactJs} ${responsivoStyles.ReactJs}`}>
                        <img src={ReactJsIcon} />
                        <div className={`${styles.Name_ReactJs} ${responsivoStyles.Name_ReactJs}`}>
                            <h1>React.js</h1>
                        </div>
                        <div className={`${styles.Nivel_ReactJs} ${responsivoStyles.Nivel_ReactJs}`} /* ==== Meu nivel de habilidade ==== */>
                            <h1>
                                Tenho habilidades intermediárias em ReactJS e uso em grande parte dos meus projetos. Capaz de criar componentes funcionais e de classe, gerenciar estado e props para interfaces de usuário dinâmicas.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.Meus_Contatos} ${responsivoStyles.Meus_Contatos}`}>
                <div className={`${styles.Text_Contatos} ${responsivoStyles.Text_Contatos}`}>
                    <h1>
                        Contatos
                    </h1>
                </div>
                <div className={`${styles.SobreContato} ${responsivoStyles.SobreContato}`}>
                    <h1>
                        Caso tenha interesse em contratar meus serviços ou mesmo oferecer sugestões, sinta-se à vontade para entrar em contato comigo por mensagem ou e-mail.
                    </h1>
                    <h2>
                        Fique à vontade para dar uma passada nos meus perfis do LinkedIn, GitHub e Figma. Lá você vai encontrar alguns dos meus projetos e publicações. Seria ótimo ter sua visita e trocar algumas ideias. Espero que encontre algo interessante por lá!
                    </h2>
                </div>
                <div className={`${styles.Redes} ${responsivoStyles.Redes}`}>
                    <div className={`${styles.LinkedIn} ${responsivoStyles.LinkedIn}`}>
                        <a
                            href="https://www.linkedin.com/in/emerson-sales-9a5a49277/"
                            target="_blank"
                        >
                            <span></span>
                            <img src={LinkedIn} className={`${styles.LinkedInIcon} ${responsivoStyles.LinkedInIcon}`} />
                            <div className={`${styles.Informacoes_LinkedIn} ${responsivoStyles.Informacoes_LinkedIn}`}>
                                <h1>
                                    LinkedIn
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.FigmaRede} ${responsivoStyles.FigmaRede}`}>
                        <a
                            href="https://www.figma.com/@emersonssales15"
                            target="_blank"
                        >
                            <span></span>
                            <img src={Figma} className={`${styles.IconFigma} ${responsivoStyles.IconFigma}`} />
                            <div className={`${styles.Informacoes_Figma} ${responsivoStyles.Informacoes_Figma}`}>
                                <h1>
                                    Figma
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.GitHub} ${responsivoStyles.GitHub}`}>
                        <a
                            href="https://github.com/emersonslls"
                            target="_blank"
                        >
                            <span></span>
                            <img src={GitHub} className={`${styles.GitHubIcon} ${responsivoStyles.GitHubIcon}`} />
                            <div className={`${styles.Informacoes_GitHub} ${responsivoStyles.Informacoes_GitHub}`}>
                                <h1>
                                    GitHub
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.WhatsApp} ${responsivoStyles.WhatsApp}`}>
                        <WhatsAppIcon phoneNumber={myPhoneNumber} message={defaultMessage} iconSrc={WhatsApp} />
                        <a
                            href="#" onClick={abrirConversaWhatsApp}
                            target="_blank"
                        >
                            <span></span>
                            <div className={`${styles.Informacoes_WhatsApp} ${responsivoStyles.Informacoes_WhatsApp}`}>
                                <h1>
                                    WhatsApp
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.Email} ${responsivoStyles.Email}`}>
                        <a
                            href={`mailto:${meuEmail}`}
                            target="_blank"
                        >
                            <span></span>
                            <img src={Email} className={`${styles.EmailIcon} ${responsivoStyles.EmailIcon}`} />
                            <div className={`${styles.Informacoes_Email} ${responsivoStyles.Informacoes_Email}`}>
                                <h1>
                                    E-mail
                                </h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default Portfolio;