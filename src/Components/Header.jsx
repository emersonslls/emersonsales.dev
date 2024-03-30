import styles from './Header.module.css';

import Logo from '../Assets/Logo.png';

function Header() {
    return (
        <header>
            <div className={styles.LogoContainer}>
                 <img src={Logo}/>
            </div>
        </header>
    );
};

export default Header;