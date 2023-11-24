import styles from './TextInput.module.css';
import { TbTopologyStar3 } from "react-icons/tb";

const TextInput = ({ label, value, setInformation, title, id }) => {
    const changeHandler = event => {
        setInformation(prev => ({...prev, [title]: event.target.value}))
    }
    
    return(
        <div>
            <div className={styles.labelContainer}>
                <label className={styles.label} htmlFor={id}>{label}</label>
                <TbTopologyStar3 className={styles.icon} />
            </div>
            <input type='text' value={value} onChange={changeHandler} className={styles.input} id={id} />
        </div>
    )
}

export default TextInput