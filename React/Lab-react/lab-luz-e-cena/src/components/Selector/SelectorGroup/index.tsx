import styles from './Selector.module.css'

type SelectorProps = {
    icon?: React.ReactNode; 
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectorGroup = ({icon, children, ...rest}: SelectorProps) => {
  return (
    <div className={styles.container}>
            {icon && <div className={styles.icone}> { icon } </div>}
        <select className={styles.selector} {...rest}>
            {children}
        </select>
    </div>
  )
}

export default SelectorGroup