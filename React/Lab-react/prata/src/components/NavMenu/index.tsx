import styles from './NavMenu.module.css';
import NavLink from '../NavLink';

const NavMenu = () => (
  <nav className={styles.navMenu} aria-label="Navegação principal">
    <ul className={styles.navList}>
      <li><NavLink href="#sobre">Sobre</NavLink></li>
      <li><NavLink href="#empreendimentos">Empreendimentos</NavLink></li>
      <li><NavLink href="#contato">Contato</NavLink></li>
    </ul>
  </nav>
);

export default NavMenu;
