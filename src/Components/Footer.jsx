import styles from './Footer.module.css';

import Logo from '../Assets/Logo.png';

function Footer() {
    return (
        <footer>
            <div className={styles.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={styles.Feito}>
                <h1>
                Feito por <a href="https://www.instagram.com/_sxlles/"> @_sxlles</a>
                </h1>
            </div>
            <div className={styles.Direitos}>
                <h2>
                    © Todos direitos reservados
                </h2>
            </div>
        </footer>
    );
};

export default Footer;