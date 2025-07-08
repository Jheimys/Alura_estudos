import styles from './InputText.module.css'

const InputText = ({...props}:React.InputHTMLAttributes<HTMLInputElement> ) => {
  return <input {...props} className={styles.input} />
}

export default InputText