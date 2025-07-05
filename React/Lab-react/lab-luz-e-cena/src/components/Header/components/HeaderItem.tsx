import styles from '../Header.module.css'

const HeaderItem = ({children}: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.menuitem}> {children} </li>)
}

export default HeaderItem